import{K as Qe,C as We,S as W,i as Z,L as Ze,e as y,c as T,a as w,d as v,b as g,f as L,D,M as N,N as H,O as Te,t as we,g as Ce,P as I,Q as ae,h as Ie,R as oe,T as Ge,E as j,U as Fe,V as ie,u as Je,W as _e,s as re,v as G,w as J,x as $,X as de,Y as he,Z as ge,p as B,_ as me,$ as De,n as M,a0 as Oe,A as x,m as ve,o as pe,a1 as $e,a2 as ke,a3 as be,a4 as xe,a5 as et,a6 as Se,a7 as Ae,j as tt,a8 as lt,l as st}from"../chunks/vendor-6ec25659.js";const R=We([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ne=Qe(R,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=l.filter(n=>n.color).map(n=>n.color).concat(e),i=a.filter((n,c)=>a.indexOf(n)===c).map((n,c)=>({id:c,color:n}));t(i)}),nt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},ce=(l,t)=>getComputedStyle(l)[t];function qe(l,t,e){const s=l.slice();return s[35]=t[e],s}function Le(l,t){let e,s,a,r,i;return{key:l,first:null,c(){e=y("li"),s=y("button"),this.h()},l(n){e=T(n,"LI",{class:!0});var c=w(e);s=T(c,"BUTTON",{class:!0,style:!0}),w(s).forEach(v),c.forEach(v),this.h()},h(){g(s,"class","task__color-btn svelte-1g5nlsu"),g(s,"style",a=`background-color: ${t[35].color}`),g(e,"class","task__color-item svelte-1g5nlsu"),this.first=e},m(n,c){L(n,e,c),D(e,s),r||(i=N(s,"click",H(function(){Te(t[16](t[35].color))&&t[16](t[35].color).apply(this,arguments)})),r=!0)},p(n,c){t=n,c[0]&4100&&a!==(a=`background-color: ${t[35].color}`)&&g(s,"style",a)},d(n){n&&v(e),r=!1,i()}}}function at(l){let t,e,s,a,r,i,n,c,f,_,p,E,F,m,o,u,h,C=[],U=new Map,A,V,P,z,K,X,Y=l[12].filter(l[27]);const ee=k=>k[35].id;for(let k=0;k<Y.length;k+=1){let b=qe(l,Y,k),q=ee(b);U.set(q,C[k]=Le(q,b))}return{c(){t=y("article"),e=y("div"),s=y("div"),a=y("div"),r=y("p"),i=y("textarea"),c=y("div"),f=y("div"),_=y("span"),p=we(l[4]),E=y("div"),F=y("button"),m=y("span"),o=y("button"),u=y("span"),h=y("ul");for(let k=0;k<C.length;k+=1)C[k].c();V=y("button"),P=y("span"),this.h()},l(k){t=T(k,"ARTICLE",{class:!0});var b=w(t);e=T(b,"DIV",{class:!0});var q=w(e);s=T(q,"DIV",{class:!0});var te=w(s);a=T(te,"DIV",{class:!0});var Q=w(a);r=T(Q,"P",{class:!0});var ue=w(r);ue.forEach(v),i=T(Q,"TEXTAREA",{class:!0}),w(i).forEach(v),Q.forEach(v),te.forEach(v),c=T(q,"DIV",{class:!0});var le=w(c);f=T(le,"DIV",{class:!0});var se=w(f);_=T(se,"SPAN",{class:!0});var ne=w(_);p=Ce(ne,l[4]),ne.forEach(v),se.forEach(v),le.forEach(v),q.forEach(v),E=T(b,"DIV",{class:!0});var d=w(E);F=T(d,"BUTTON",{class:!0});var O=w(F);m=T(O,"SPAN",{class:!0}),w(m).forEach(v),O.forEach(v),o=T(d,"BUTTON",{class:!0});var S=w(o);u=T(S,"SPAN",{class:!0}),w(u).forEach(v),S.forEach(v),d.forEach(v),h=T(b,"UL",{class:!0,style:!0});var Ee=w(h);for(let fe=0;fe<C.length;fe+=1)C[fe].l(Ee);Ee.forEach(v),V=T(b,"BUTTON",{class:!0});var ye=w(V);P=T(ye,"SPAN",{class:!0}),w(P).forEach(v),ye.forEach(v),b.forEach(v),this.h()},h(){g(r,"class","task__main-content svelte-1g5nlsu"),I(r,"isEdit",l[7]),g(i,"class","task__main-content svelte-1g5nlsu"),i.disabled=n=!l[7],I(i,"addTransition",l[10]),g(a,"class","task__main-content-wrapper svelte-1g5nlsu"),g(s,"class","task__main-container svelte-1g5nlsu"),g(_,"class","svelte-1g5nlsu"),g(f,"class","task__info-content svelte-1g5nlsu"),g(c,"class","task__info svelte-1g5nlsu"),g(e,"class","task__main svelte-1g5nlsu"),I(e,"isEdit",l[7]),g(m,"class","svg-image-del svelte-1g5nlsu"),g(F,"class","task__menu-btn task__menu-btn_del svelte-1g5nlsu"),g(u,"class","svg-image-pen svelte-1g5nlsu"),g(o,"class","task__menu-btn task__menu-btn_edit svelte-1g5nlsu"),I(o,"isSelect",l[7]),I(o,"isChanged",l[8]),I(o,"isSave",l[9]),g(E,"class","task__circle task__menu svelte-1g5nlsu"),I(E,"isOpen",l[7]),g(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1g5nlsu"),g(h,"style",A=`background-color: ${l[2]}`),I(h,"isOpen",l[7]),g(P,"class","svelte-1g5nlsu"),g(V,"class","task__info-open svelte-1g5nlsu"),I(V,"isHidden",l[7]),g(t,"class",z="task "+l[1]+" svelte-1g5nlsu"),I(t,"isDisabled",l[3]),I(t,"isInfoOpen",l[5]),I(t,"isEdit",l[7])},m(k,b){L(k,t,b),D(t,e),D(e,s),D(s,a),D(a,r),r.innerHTML=l[0],D(a,i),l[22](i),ae(i,l[0]),D(e,c),D(c,f),D(f,_),D(_,p),l[25](c),D(t,E),D(E,F),D(F,m),D(E,o),D(o,u),D(t,h);for(let q=0;q<C.length;q+=1)C[q].m(h,null);D(t,V),D(V,P),K||(X=[N(i,"input",l[23]),N(i,"input",l[24]),N(i,"keydown",l[18]),N(e,"click",l[13]),N(F,"click",H(l[14])),N(o,"click",H(l[26])),N(V,"click",H(l[28]))],K=!0)},p(k,b){b[0]&1&&(r.innerHTML=k[0]),b[0]&128&&I(r,"isEdit",k[7]),b[0]&128&&n!==(n=!k[7])&&(i.disabled=n),b[0]&1&&ae(i,k[0]),b[0]&1024&&I(i,"addTransition",k[10]),b[0]&16&&Ie(p,k[4]),b[0]&128&&I(e,"isEdit",k[7]),b[0]&128&&I(o,"isSelect",k[7]),b[0]&256&&I(o,"isChanged",k[8]),b[0]&512&&I(o,"isSave",k[9]),b[0]&128&&I(E,"isOpen",k[7]),b[0]&69636&&(Y=k[12].filter(k[27]),C=oe(C,b,ee,1,k,Y,U,h,Ge,Le,null,qe)),b[0]&4&&A!==(A=`background-color: ${k[2]}`)&&g(h,"style",A),b[0]&128&&I(h,"isOpen",k[7]),b[0]&128&&I(V,"isHidden",k[7]),b[0]&2&&z!==(z="task "+k[1]+" svelte-1g5nlsu")&&g(t,"class",z),b[0]&10&&I(t,"isDisabled",k[3]),b[0]&34&&I(t,"isInfoOpen",k[5]),b[0]&130&&I(t,"isEdit",k[7])},i:j,o:j,d(k){k&&v(t),l[22](null),l[25](null);for(let b=0;b<C.length;b+=1)C[b].d();K=!1,Fe(X)}}}let Ve=new Set;function ot(){Ve.forEach(l=>{l.edit(!1)})}function it(l,t,e){let s,a;ie(l,R,d=>e(30,s=d)),ie(l,Ne,d=>e(12,a=d));let{class:r=""}=t,{text:i=""}=t,{color:n="#0029FF"}=t,{disabled:c=!1}=t,{id:f=null}=t,{date:_=""}=t,p=i,E=!1,F,m=!1,o=!1,u=!1,h=!1,C,U;const A=()=>{if(m===!1){let d=s.map(O=>(f===O.id&&(O.done=!O.done),O));R.set(d)}},V=()=>{let d=s.filter(O=>O.id!=f);R.set(d)};function P(d){e(7,m=d!=null?d:!m),m===!1&&X()}const z=d=>{let O=s.map(S=>(f===S.id&&(S.color=d),S));R.set(O)};function K(d){e(5,E=d!=null?d:!E);let O=0;F.childNodes.forEach(S=>O+=S.clientHeight),F.style.setProperty("--taskInfoHeight",`${E?O:0}px`)}function X(){o&&Y(i).then(()=>{e(8,o=!1),clearTimeout(U),e(9,u=!0),U=setTimeout(()=>{e(9,u=!1)},500)})}function Y(d){if(typeof d=="string")return new Promise(O=>{R.set(s.map(S=>(S.id===f&&(S.text=d),S))),O()});throw new Error("The value is not equal to the string")}function ee(d){let O=d.ctrlKey?!1:d.metaKey,S=d.keyCode;if(O&&S===83)return d.preventDefault(),X(),!1}function k(d=i){return e(8,o=d!==p)}function b(){e(11,C.rows=1,C);const d=parseFloat(ce(C,"padding-top"))+parseFloat(ce(C,"padding-bottom")),O=C.scrollHeight-d,S=parseFloat(ce(C,"line-height"));S==="normal"&&(S=parseFloat(ce(C,"font-size"))),console.log(O),e(11,C.rows=O/S,C)}Je(()=>{console.log(C.rows),b(),console.log(C.rows),e(10,h=!0)}),Ve.add({save(){X()},edit(d){P(d)}});function q(d){_e[d?"unshift":"push"](()=>{C=d,e(11,C)})}function te(){i=this.value,e(0,i)}const Q=()=>{k(),b()};function ue(d){_e[d?"unshift":"push"](()=>{F=d,e(6,F)})}const le=()=>{m===!1&&ot(),P()},se=d=>d.color!=n,ne=()=>K();return l.$$set=d=>{"class"in d&&e(1,r=d.class),"text"in d&&e(0,i=d.text),"color"in d&&e(2,n=d.color),"disabled"in d&&e(3,c=d.disabled),"id"in d&&e(21,f=d.id),"date"in d&&e(4,_=d.date)},[i,r,n,c,_,E,F,m,o,u,h,C,a,A,V,P,z,K,ee,k,b,f,q,te,Q,ue,le,se,ne]}class Pe extends W{constructor(t){super();Z(this,t,it,at,Ze,{class:1,text:0,color:2,disabled:3,id:21,date:4},null,[-1,-1])}}function Ue(l,t,e){const s=l.slice();return s[4]=t[e],s}function Be(l,t,e){const s=l.slice();return s[4]=t[e],s}function Me(l,t){let e,s,a,r,i,n=j,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),G(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=w(e);J(s.$$.fragment,_),_.forEach(v),this.h()},h(){g(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),$(s,e,null),c=!0},p(f,_){t=f;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),s.$set(p)},r(){i=e.getBoundingClientRect()},f(){de(e),n(),he(e,i)},a(){n(),n=ge(e,i,ke,{duration:300})},i(f){c||(B(s.$$.fragment,f),me(()=>{r&&r.end(1),a=De(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){M(s.$$.fragment,f),a&&a.invalidate(),r=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&v(e),x(s),f&&r&&r.end()}}}function Re(l,t){let e,s,a,r,i,n=j,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),G(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=w(e);J(s.$$.fragment,_),_.forEach(v),this.h()},h(){g(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),$(s,e,null),c=!0},p(f,_){t=f;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),s.$set(p)},r(){i=e.getBoundingClientRect()},f(){de(e),n(),he(e,i)},a(){n(),n=ge(e,i,ke,{duration:300})},i(f){c||(B(s.$$.fragment,f),me(()=>{r&&r.end(1),a=De(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){M(s.$$.fragment,f),a&&a.invalidate(),r=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&v(e),x(s),f&&r&&r.end()}}}function rt(l){let t,e,s,a=[],r=new Map,i,n=[],c=new Map,f,_,p=l[1].filter(He);const E=o=>o[4].id;for(let o=0;o<p.length;o+=1){let u=Be(l,p,o),h=E(u);r.set(h,a[o]=Me(h,u))}let F=l[1].filter(je);const m=o=>o[4].id;for(let o=0;o<F.length;o+=1){let u=Ue(l,F,o),h=m(u);c.set(h,n[o]=Re(h,u))}return{c(){t=y("section"),e=y("div"),s=y("ul");for(let o=0;o<a.length;o+=1)a[o].c();i=y("ul");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=T(o,"SECTION",{class:!0});var u=w(t);e=T(u,"DIV",{class:!0});var h=w(e);s=T(h,"UL",{class:!0});var C=w(s);for(let A=0;A<a.length;A+=1)a[A].l(C);C.forEach(v),i=T(h,"UL",{class:!0});var U=w(i);for(let A=0;A<n.length;A+=1)n[A].l(U);U.forEach(v),h.forEach(v),u.forEach(v),this.h()},h(){g(s,"class","task-section__col"),g(i,"class","task-section__col"),g(e,"class","container task-section__grid svelte-te6j4q"),g(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(o,u){L(o,t,u),D(t,e),D(e,s);for(let h=0;h<a.length;h+=1)a[h].m(s,null);D(e,i);for(let h=0;h<n.length;h+=1)n[h].m(i,null);_=!0},p(o,[u]){if(u&2){p=o[1].filter(He),ve();for(let h=0;h<a.length;h+=1)a[h].r();a=oe(a,u,E,1,o,p,r,s,be,Me,null,Be);for(let h=0;h<a.length;h+=1)a[h].a();pe()}if(u&2){F=o[1].filter(je),ve();for(let h=0;h<n.length;h+=1)n[h].r();n=oe(n,u,m,1,o,F,c,i,be,Re,null,Ue);for(let h=0;h<n.length;h+=1)n[h].a();pe()}(!_||u&1&&f!==(f="task-section "+o[0]+" svelte-te6j4q"))&&g(t,"class",f)},i(o){if(!_){for(let u=0;u<p.length;u+=1)B(a[u]);for(let u=0;u<F.length;u+=1)B(n[u]);_=!0}},o(o){for(let u=0;u<a.length;u+=1)M(a[u]);for(let u=0;u<n.length;u+=1)M(n[u]);_=!1},d(o){o&&v(t);for(let u=0;u<a.length;u+=1)a[u].d();for(let u=0;u<n.length;u+=1)n[u].d()}}}const He=l=>!l.done,je=l=>l.done;function ct(l,t,e){let s;ie(l,R,n=>e(1,s=n));let{class:a=""}=t;const[r,i]=$e({duration:n=>Math.sqrt(n*200),fallback(n,c){const f=getComputedStyle(n),_=f.transform==="none"?"":f.transform;return{duration:600,easing:xe,css:p=>`
					transform: ${_} scale(${p});
					opacity: ${p}
				`}}});return l.$$set=n=>{"class"in n&&e(0,a=n.class)},[a,s,r,i]}class ut extends W{constructor(t){super();Z(this,t,ct,rt,re,{class:0})}}function ze(l){let t,e,s,a=l[2].text&&Ke(l);return{c(){t=y("button"),a&&a.c(),this.h()},l(r){t=T(r,"BUTTON",{class:!0});var i=w(t);a&&a.l(i),i.forEach(v),this.h()},h(){g(t,"class","btn svelte-1yy2xse")},m(r,i){L(r,t,i),a&&a.m(t,null),e||(s=N(t,"click",H(l[6])),e=!0)},p(r,i){r[2].text?a?a.p(r,i):(a=Ke(r),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(r){r&&v(t),a&&a.d(),e=!1,s()}}}function Ke(l){let t=l[2].text+"",e;return{c(){e=we(t)},l(s){e=Ce(s,t)},m(s,a){L(s,e,a)},p(s,a){a&4&&t!==(t=s[2].text+"")&&Ie(e,t)},d(s){s&&v(e)}}}function ft(l){let t,e,s,a,r,i=l[2]&&ze(l);return{c(){t=y("div"),e=y("input"),i&&i.c(),this.h()},l(n){t=T(n,"DIV",{class:!0});var c=w(t);e=T(c,"INPUT",{placeholder:!0,class:!0}),i&&i.l(c),c.forEach(v),this.h()},h(){g(e,"placeholder",l[1]),g(e,"class","svelte-1yy2xse"),g(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),I(t,"isError",l[5])},m(n,c){L(n,t,c),D(t,e),ae(e,l[4]),i&&i.m(t,null),l[10](t),a||(r=[N(e,"input",l[9]),N(e,"input",l[7]),N(e,"keydown",l[8])],a=!0)},p(n,[c]){c&2&&g(e,"placeholder",n[1]),c&16&&e.value!==n[4]&&ae(e,n[4]),n[2]?i?i.p(n,c):(i=ze(n),i.c(),i.m(t,null)):i&&(i.d(1),i=null),c&5&&s!==(s="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse")&&g(t,"class",s),c&37&&I(t,"isError",n[5])},i:j,o:j,d(n){n&&v(t),i&&i.d(),l[10](null),a=!1,Fe(r)}}}function _t(l,t,e){let{class:s=""}=t,{placeholder:a="Placeholer"}=t,{btn:r=null}=t,i,n,c=!1;const f=et(),_=()=>{n?(f("submit",{value:n}),e(4,n="")):e(5,c=!0)},p=()=>{e(5,c=!1)},E=o=>{let u=o.key,h=o.ctrlKey,C=o.shiftKey;o.keyCode,h&&C&&f("color"),u==="Enter"&&_()};function F(){n=this.value,e(4,n)}function m(o){_e[o?"unshift":"push"](()=>{i=o,e(3,i)})}return l.$$set=o=>{"class"in o&&e(0,s=o.class),"placeholder"in o&&e(1,a=o.placeholder),"btn"in o&&e(2,r=o.btn)},[s,a,r,i,n,c,_,p,E,F,m]}class dt extends W{constructor(t){super();Z(this,t,_t,ft,re,{class:0,placeholder:1,btn:2})}}function Xe(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Ye(l,t){let e,s,a,r,i=j,n,c,f;return{key:l,first:null,c(){e=y("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(v),this.h()},h(){g(e,"class","add-todo__color svelte-1hafqlz"),g(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,p){L(_,e,p),n=!0,c||(f=N(e,"click",H(function(){Te(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(_,p){t=_,(!n||p&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&g(e,"style",s)},r(){r=e.getBoundingClientRect()},f(){de(e),i(),he(e,r)},a(){i(),i=ge(e,r,ke,{})},i(_){n||(me(()=>{a||(a=Se(e,Ae,{},!0)),a.run(1)}),n=!0)},o(_){a||(a=Se(e,Ae,{},!1)),a.run(0),n=!1},d(_){_&&v(e),_&&a&&a.end(),c=!1,f()}}}function ht(l){let t,e,s,a,r=[],i=new Map,n,c,f,_,p,E=l[3].filter(l[7]);const F=m=>m[9].id;for(let m=0;m<E.length;m+=1){let o=Xe(l,E,m),u=F(o);i.set(u,r[m]=Ye(u,o))}return n=new dt({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("color",l[8]),n.$on("submit",l[4]),{c(){t=y("div"),e=y("div"),s=y("span");for(let m=0;m<r.length;m+=1)r[m].c();G(n.$$.fragment),this.h()},l(m){t=T(m,"DIV",{class:!0});var o=w(t);e=T(o,"DIV",{class:!0});var u=w(e);s=T(u,"SPAN",{class:!0,style:!0}),w(s).forEach(v);for(let h=0;h<r.length;h+=1)r[h].l(u);u.forEach(v),J(n.$$.fragment,o),o.forEach(v),this.h()},h(){g(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),g(s,"style",a=`color: ${l[1]}`),g(e,"class","add-todo__color-list svelte-1hafqlz"),I(e,"isOpen",l[2]),g(t,"class",c="add-todo "+l[0]+" svelte-1hafqlz")},m(m,o){L(m,t,o),D(t,e),D(e,s);for(let u=0;u<r.length;u+=1)r[u].m(e,null);$(n,t,null),f=!0,_||(p=N(s,"click",H(l[6])),_=!0)},p(m,[o]){if((!f||o&2&&a!==(a=`color: ${m[1]}`))&&g(s,"style",a),o&42){E=m[3].filter(m[7]),ve();for(let u=0;u<r.length;u+=1)r[u].r();r=oe(r,o,F,1,m,E,i,e,be,Ye,null,Xe);for(let u=0;u<r.length;u+=1)r[u].a();pe()}o&4&&I(e,"isOpen",m[2]),(!f||o&1&&c!==(c="add-todo "+m[0]+" svelte-1hafqlz"))&&g(t,"class",c)},i(m){if(!f){for(let o=0;o<E.length;o+=1)B(r[o]);B(n.$$.fragment,m),f=!0}},o(m){for(let o=0;o<r.length;o+=1)M(r[o]);M(n.$$.fragment,m),f=!1},d(m){m&&v(t);for(let o=0;o<r.length;o+=1)r[o].d();x(n),_=!1,p()}}}function gt(l,t,e){let s;ie(l,Ne,E=>e(3,s=E));let{class:a=""}=t,r="#0029FF",i=!1;const n=E=>{let F={id:Date.now(),text:E.detail.value,color:r,done:!1,date:nt(new Date,"dot")};R.update(m=>m=[F,...m])},c=E=>E&&e(1,r=E),f=()=>e(2,i=!i),_=E=>E.color!=r,p=()=>e(2,i=!i);return l.$$set=E=>{"class"in E&&e(0,a=E.class)},[a,r,i,s,n,c,f,_,p]}class mt extends W{constructor(t){super();Z(this,t,gt,ht,re,{class:0})}}function vt(l){let t,e,s,a,r,i,n;return a=new mt({}),i=new ut({props:{class:"mt-50"}}),{c(){t=tt(),e=y("section"),s=y("div"),G(a.$$.fragment),G(i.$$.fragment),this.h()},l(c){lt('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=st(c),e=T(c,"SECTION",{class:!0});var _=w(e);s=T(_,"DIV",{class:!0});var p=w(s);J(a.$$.fragment,p),p.forEach(v),_.forEach(v),J(i.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",g(s,"class","container"),g(e,"class",r=""+(l[0]+" mt-50 svelte-110abfo"))},m(c,f){L(c,t,f),L(c,e,f),D(e,s),$(a,s,null),$(i,c,f),n=!0},p(c,[f]){(!n||f&1&&r!==(r=""+(c[0]+" mt-50 svelte-110abfo")))&&g(e,"class",r)},i(c){n||(B(a.$$.fragment,c),B(i.$$.fragment,c),n=!0)},o(c){M(a.$$.fragment,c),M(i.$$.fragment,c),n=!1},d(c){c&&v(t),c&&v(e),x(a),x(i,c)}}}function pt(l,t,e){let{class:s=""}=t;return l.$$set=a=>{"class"in a&&e(0,s=a.class)},[s]}class bt extends W{constructor(t){super();Z(this,t,pt,vt,re,{class:0})}}export{bt as default};