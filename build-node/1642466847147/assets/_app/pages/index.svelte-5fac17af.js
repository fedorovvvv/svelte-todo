import{K as Ke,C as He,S as Y,i as Q,L as je,e as T,c as w,a as C,d as k,b as g,f as q,D as O,M as S,N as z,O as ke,t as pe,g as be,P as I,Q as ne,h as Ee,R as ae,T as Xe,E as K,U as ye,V as oe,u as Ye,W as ce,s as ie,v as W,w as Z,x as G,X as ue,Y as fe,Z as _e,p as B,_ as de,$ as Te,n as R,a0 as we,A as J,m as he,o as me,a1 as Qe,a2 as ge,a3 as ve,a4 as We,a5 as Ze,a6 as Ce,a7 as Ie,j as Ge,a8 as Je,l as $e}from"../chunks/vendor-6ec25659.js";const M=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=Ke(M,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=l.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,r)=>n.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(i)}),xe=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},et=l=>{l.rows=1;let t=l.scrollHeight;l.addEventListener("transitionend",()=>{console.log("transitionEnd"),t=l.scrollHeight}),console.log(t)};function De(l,t,e){const s=l.slice();return s[33]=t[e],s}function Ae(l,t){let e,s,n,c,i;return{key:l,first:null,c(){e=T("li"),s=T("button"),this.h()},l(a){e=w(a,"LI",{class:!0});var r=C(e);s=w(r,"BUTTON",{class:!0,style:!0}),C(s).forEach(k),r.forEach(k),this.h()},h(){g(s,"class","task__color-btn svelte-a59l81"),g(s,"style",n=`background-color: ${t[33].color}`),g(e,"class","task__color-item svelte-a59l81"),this.first=e},m(a,r){q(a,e,r),O(e,s),c||(i=S(s,"click",z(function(){ke(t[15](t[33].color))&&t[15](t[33].color).apply(this,arguments)})),c=!0)},p(a,r){t=a,r[0]&2052&&n!==(n=`background-color: ${t[33].color}`)&&g(s,"style",n)},d(a){a&&k(e),c=!1,i()}}}function tt(l){let t,e,s,n,c,i,a,r,f,_,v,E,y,h,o,u=[],m=new Map,U,F,A,L,H,j,P=l[11].filter(l[25]);const $=p=>p[33].id;for(let p=0;p<P.length;p+=1){let b=De(l,P,p),V=$(b);m.set(V,u[p]=Ae(V,b))}return{c(){t=T("article"),e=T("div"),s=T("div"),n=T("textarea"),i=T("div"),a=T("div"),r=T("span"),f=pe(l[4]),_=T("div"),v=T("button"),E=T("span"),y=T("button"),h=T("span"),o=T("ul");for(let p=0;p<u.length;p+=1)u[p].c();F=T("button"),A=T("span"),this.h()},l(p){t=w(p,"ARTICLE",{class:!0});var b=C(t);e=w(b,"DIV",{class:!0});var V=C(e);s=w(V,"DIV",{class:!0});var x=C(s);n=w(x,"TEXTAREA",{class:!0}),C(n).forEach(k),x.forEach(k),i=w(V,"DIV",{class:!0});var ee=C(i);a=w(ee,"DIV",{class:!0});var te=C(a);r=w(te,"SPAN",{class:!0});var le=C(r);f=be(le,l[4]),le.forEach(k),te.forEach(k),ee.forEach(k),V.forEach(k),_=w(b,"DIV",{class:!0});var X=C(_);v=w(X,"BUTTON",{class:!0});var se=C(v);E=w(se,"SPAN",{class:!0}),C(E).forEach(k),se.forEach(k),y=w(X,"BUTTON",{class:!0});var d=C(y);h=w(d,"SPAN",{class:!0}),C(h).forEach(k),d.forEach(k),X.forEach(k),o=w(b,"UL",{class:!0,style:!0});var D=C(o);for(let re=0;re<u.length;re+=1)u[re].l(D);D.forEach(k),F=w(b,"BUTTON",{class:!0});var N=C(F);A=w(N,"SPAN",{class:!0}),C(A).forEach(k),N.forEach(k),b.forEach(k),this.h()},h(){g(n,"class","task__main-content textarea-resize svelte-a59l81"),n.disabled=c=!l[7],g(s,"class","task__main-container svelte-a59l81"),g(r,"class","svelte-a59l81"),g(a,"class","task__info-content svelte-a59l81"),g(i,"class","task__info svelte-a59l81"),g(e,"class","task__main svelte-a59l81"),I(e,"isEdit",l[7]),g(E,"class","svg-image-del svelte-a59l81"),g(v,"class","task__menu-btn task__menu-btn_del svelte-a59l81"),g(h,"class","svg-image-pen svelte-a59l81"),g(y,"class","task__menu-btn task__menu-btn_edit svelte-a59l81"),I(y,"isSelect",l[7]),I(y,"isChanged",l[8]),I(y,"isSave",l[9]),g(_,"class","task__circle task__menu svelte-a59l81"),I(_,"isOpen",l[7]),g(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-a59l81"),g(o,"style",U=`background-color: ${l[2]}`),I(o,"isOpen",l[7]),g(A,"class","svelte-a59l81"),g(F,"class","task__info-open svelte-a59l81"),I(F,"isHidden",l[7]),g(t,"class",L="task "+l[1]+" svelte-a59l81"),I(t,"isDisabled",l[3]),I(t,"isInfoOpen",l[5]),I(t,"isEdit",l[7])},m(p,b){q(p,t,b),O(t,e),O(e,s),O(s,n),l[20](n),ne(n,l[0]),O(e,i),O(i,a),O(a,r),O(r,f),l[23](i),O(t,_),O(_,v),O(v,E),O(_,y),O(y,h),O(t,o);for(let V=0;V<u.length;V+=1)u[V].m(o,null);O(t,F),O(F,A),H||(j=[S(n,"input",l[21]),S(n,"input",l[22]),S(n,"keydown",l[17]),S(e,"click",l[12]),S(v,"click",z(l[13])),S(y,"click",z(l[24])),S(F,"click",z(l[26]))],H=!0)},p(p,b){b[0]&128&&c!==(c=!p[7])&&(n.disabled=c),b[0]&1&&ne(n,p[0]),b[0]&16&&Ee(f,p[4]),b[0]&128&&I(e,"isEdit",p[7]),b[0]&128&&I(y,"isSelect",p[7]),b[0]&256&&I(y,"isChanged",p[8]),b[0]&512&&I(y,"isSave",p[9]),b[0]&128&&I(_,"isOpen",p[7]),b[0]&34820&&(P=p[11].filter(p[25]),u=ae(u,b,$,1,p,P,m,o,Xe,Ae,null,De)),b[0]&4&&U!==(U=`background-color: ${p[2]}`)&&g(o,"style",U),b[0]&128&&I(o,"isOpen",p[7]),b[0]&128&&I(F,"isHidden",p[7]),b[0]&2&&L!==(L="task "+p[1]+" svelte-a59l81")&&g(t,"class",L),b[0]&10&&I(t,"isDisabled",p[3]),b[0]&34&&I(t,"isInfoOpen",p[5]),b[0]&130&&I(t,"isEdit",p[7])},i:K,o:K,d(p){p&&k(t),l[20](null),l[23](null);for(let b=0;b<u.length;b+=1)u[b].d();H=!1,ye(j)}}}let Fe=new Set;function lt(){Fe.forEach(l=>{l.edit(!1)})}function st(l,t,e){let s,n;oe(l,M,d=>e(28,s=d)),oe(l,Oe,d=>e(11,n=d));let{class:c=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,v=i,E=!1,y,h=!1,o=!1,u=!1,m,U;const F=()=>{if(h===!1){let d=s.map(D=>(f===D.id&&(D.done=!D.done),D));M.set(d)}},A=()=>{let d=s.filter(D=>D.id!=f);M.set(d)};function L(d){e(7,h=d!=null?d:!h),h===!1&&P()}const H=d=>{let D=s.map(N=>(f===N.id&&(N.color=d),N));M.set(D)};function j(d){e(5,E=d!=null?d:!E);let D=0;y.childNodes.forEach(N=>D+=N.clientHeight),y.style.setProperty("--taskInfoHeight",`${E?D:0}px`)}function P(){o&&$(i).then(()=>{e(8,o=!1),clearTimeout(U),e(9,u=!0),U=setTimeout(()=>{e(9,u=!1)},500)})}function $(d){if(typeof d=="string")return new Promise(D=>{M.set(s.map(N=>(N.id===f&&(N.text=d),N))),D()});throw new Error("The value is not equal to the string")}function p(d){let D=d.ctrlKey?!1:d.metaKey,N=d.keyCode;if(D&&N===83)return d.preventDefault(),P(),!1}function b(d=i){return e(8,o=d!==v)}Ye(()=>{et(m)}),Fe.add({save(){P()},edit(d){L(d)}});function V(d){ce[d?"unshift":"push"](()=>{m=d,e(10,m)})}function x(){i=this.value,e(0,i)}const ee=()=>b();function te(d){ce[d?"unshift":"push"](()=>{y=d,e(6,y)})}const le=()=>{h===!1&&lt(),L()},X=d=>d.color!=a,se=()=>j();return l.$$set=d=>{"class"in d&&e(1,c=d.class),"text"in d&&e(0,i=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(19,f=d.id),"date"in d&&e(4,_=d.date)},[i,c,a,r,_,E,y,h,o,u,m,n,F,A,L,H,j,p,b,f,V,x,ee,te,le,X,se]}class Ne extends Y{constructor(t){super();Q(this,t,st,tt,je,{class:1,text:0,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Se(l,t,e){const s=l.slice();return s[4]=t[e],s}function Ue(l,t,e){const s=l.slice();return s[4]=t[e],s}function Ve(l,t){let e,s,n,c,i,a=K,r;return s=new Ne({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),W(s.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=C(e);Z(s.$$.fragment,_),_.forEach(k),this.h()},h(){g(e,"class","task-section__item-box svelte-p1ezao"),this.first=e},m(f,_){q(f,e,_),G(s,e,null),r=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),s.$set(v)},r(){i=e.getBoundingClientRect()},f(){ue(e),a(),fe(e,i)},a(){a(),a=_e(e,i,ge,{duration:300})},i(f){r||(B(s.$$.fragment,f),de(()=>{c&&c.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){R(s.$$.fragment,f),n&&n.invalidate(),c=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),J(s),f&&c&&c.end()}}}function qe(l,t){let e,s,n,c,i,a=K,r;return s=new Ne({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),W(s.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=C(e);Z(s.$$.fragment,_),_.forEach(k),this.h()},h(){g(e,"class","task-section__item-box svelte-p1ezao"),this.first=e},m(f,_){q(f,e,_),G(s,e,null),r=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),s.$set(v)},r(){i=e.getBoundingClientRect()},f(){ue(e),a(),fe(e,i)},a(){a(),a=_e(e,i,ge,{duration:300})},i(f){r||(B(s.$$.fragment,f),de(()=>{c&&c.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){R(s.$$.fragment,f),n&&n.invalidate(),c=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),J(s),f&&c&&c.end()}}}function nt(l){let t,e,s,n=[],c=new Map,i,a=[],r=new Map,f,_,v=l[1].filter(Le);const E=o=>o[4].id;for(let o=0;o<v.length;o+=1){let u=Ue(l,v,o),m=E(u);c.set(m,n[o]=Ve(m,u))}let y=l[1].filter(Pe);const h=o=>o[4].id;for(let o=0;o<y.length;o+=1){let u=Se(l,y,o),m=h(u);r.set(m,a[o]=qe(m,u))}return{c(){t=T("section"),e=T("div"),s=T("ul");for(let o=0;o<n.length;o+=1)n[o].c();i=T("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=w(o,"SECTION",{class:!0});var u=C(t);e=w(u,"DIV",{class:!0});var m=C(e);s=w(m,"UL",{class:!0});var U=C(s);for(let A=0;A<n.length;A+=1)n[A].l(U);U.forEach(k),i=w(m,"UL",{class:!0});var F=C(i);for(let A=0;A<a.length;A+=1)a[A].l(F);F.forEach(k),m.forEach(k),u.forEach(k),this.h()},h(){g(s,"class","task-section__col"),g(i,"class","task-section__col"),g(e,"class","container task-section__grid svelte-p1ezao"),g(t,"class",f="task-section "+l[0]+" svelte-p1ezao")},m(o,u){q(o,t,u),O(t,e),O(e,s);for(let m=0;m<n.length;m+=1)n[m].m(s,null);O(e,i);for(let m=0;m<a.length;m+=1)a[m].m(i,null);_=!0},p(o,[u]){if(u&2){v=o[1].filter(Le),he();for(let m=0;m<n.length;m+=1)n[m].r();n=ae(n,u,E,1,o,v,c,s,ve,Ve,null,Ue);for(let m=0;m<n.length;m+=1)n[m].a();me()}if(u&2){y=o[1].filter(Pe),he();for(let m=0;m<a.length;m+=1)a[m].r();a=ae(a,u,h,1,o,y,r,i,ve,qe,null,Se);for(let m=0;m<a.length;m+=1)a[m].a();me()}(!_||u&1&&f!==(f="task-section "+o[0]+" svelte-p1ezao"))&&g(t,"class",f)},i(o){if(!_){for(let u=0;u<v.length;u+=1)B(n[u]);for(let u=0;u<y.length;u+=1)B(a[u]);_=!0}},o(o){for(let u=0;u<n.length;u+=1)R(n[u]);for(let u=0;u<a.length;u+=1)R(a[u]);_=!1},d(o){o&&k(t);for(let u=0;u<n.length;u+=1)n[u].d();for(let u=0;u<a.length;u+=1)a[u].d()}}}const Le=l=>!l.done,Pe=l=>l.done;function at(l,t,e){let s;oe(l,M,a=>e(1,s=a));let{class:n=""}=t;const[c,i]=Qe({duration:a=>Math.sqrt(a*200),fallback(a,r){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:We,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return l.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,s,c,i]}class ot extends Y{constructor(t){super();Q(this,t,at,nt,ie,{class:0})}}function Be(l){let t,e,s,n=l[2].text&&Re(l);return{c(){t=T("button"),n&&n.c(),this.h()},l(c){t=w(c,"BUTTON",{class:!0});var i=C(t);n&&n.l(i),i.forEach(k),this.h()},h(){g(t,"class","btn svelte-ckief0")},m(c,i){q(c,t,i),n&&n.m(t,null),e||(s=S(t,"click",z(l[6])),e=!0)},p(c,i){c[2].text?n?n.p(c,i):(n=Re(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&k(t),n&&n.d(),e=!1,s()}}}function Re(l){let t=l[2].text+"",e;return{c(){e=pe(t)},l(s){e=be(s,t)},m(s,n){q(s,e,n)},p(s,n){n&4&&t!==(t=s[2].text+"")&&Ee(e,t)},d(s){s&&k(e)}}}function it(l){let t,e,s,n,c,i=l[2]&&Be(l);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(a){t=w(a,"DIV",{class:!0});var r=C(t);e=w(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){g(e,"placeholder",l[1]),g(e,"class","svelte-ckief0"),g(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-ckief0"),I(t,"isError",l[5])},m(a,r){q(a,t,r),O(t,e),ne(e,l[4]),i&&i.m(t,null),l[10](t),n||(c=[S(e,"input",l[9]),S(e,"input",l[7]),S(e,"keydown",l[8])],n=!0)},p(a,[r]){r&2&&g(e,"placeholder",a[1]),r&16&&e.value!==a[4]&&ne(e,a[4]),a[2]?i?i.p(a,r):(i=Be(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-ckief0")&&g(t,"class",s),r&37&&I(t,"isError",a[5])},i:K,o:K,d(a){a&&k(t),i&&i.d(),l[10](null),n=!1,ye(c)}}}function rt(l,t,e){let{class:s=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,i,a,r=!1;const f=Ze(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,r=!0)},v=()=>{e(5,r=!1)},E=o=>{let u=o.key,m=o.ctrlKey,U=o.shiftKey;o.keyCode,m&&U&&f("color"),u==="Enter"&&_()};function y(){a=this.value,e(4,a)}function h(o){ce[o?"unshift":"push"](()=>{i=o,e(3,i)})}return l.$$set=o=>{"class"in o&&e(0,s=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,c=o.btn)},[s,n,c,i,a,r,_,v,E,y,h]}class ct extends Y{constructor(t){super();Q(this,t,rt,it,ie,{class:0,placeholder:1,btn:2})}}function Me(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function ze(l,t){let e,s,n,c,i=K,a,r,f;return{key:l,first:null,c(){e=T("button"),this.h()},l(_){e=w(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(k),this.h()},h(){g(e,"class","add-todo__color svelte-10cwdk9"),g(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){q(_,e,v),a=!0,r||(f=S(e,"click",z(function(){ke(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,v){t=_,(!a||v&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&g(e,"style",s)},r(){c=e.getBoundingClientRect()},f(){ue(e),i(),fe(e,c)},a(){i(),i=_e(e,c,ge,{})},i(_){a||(de(()=>{n||(n=Ce(e,Ie,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ce(e,Ie,{},!1)),n.run(0),a=!1},d(_){_&&k(e),_&&n&&n.end(),r=!1,f()}}}function ut(l){let t,e,s,n,c=[],i=new Map,a,r,f,_,v,E=l[3].filter(l[7]);const y=h=>h[9].id;for(let h=0;h<E.length;h+=1){let o=Me(l,E,h),u=y(o);i.set(u,c[h]=ze(u,o))}return a=new ct({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",l[8]),a.$on("submit",l[4]),{c(){t=T("div"),e=T("div"),s=T("span");for(let h=0;h<c.length;h+=1)c[h].c();W(a.$$.fragment),this.h()},l(h){t=w(h,"DIV",{class:!0});var o=C(t);e=w(o,"DIV",{class:!0});var u=C(e);s=w(u,"SPAN",{class:!0,style:!0}),C(s).forEach(k);for(let m=0;m<c.length;m+=1)c[m].l(u);u.forEach(k),Z(a.$$.fragment,o),o.forEach(k),this.h()},h(){g(s,"class","add-todo__color add-todo__color_main svelte-10cwdk9"),g(s,"style",n=`color: ${l[1]}`),g(e,"class","add-todo__color-list svelte-10cwdk9"),I(e,"isOpen",l[2]),g(t,"class",r="add-todo "+l[0]+" svelte-10cwdk9")},m(h,o){q(h,t,o),O(t,e),O(e,s);for(let u=0;u<c.length;u+=1)c[u].m(e,null);G(a,t,null),f=!0,_||(v=S(s,"click",z(l[6])),_=!0)},p(h,[o]){if((!f||o&2&&n!==(n=`color: ${h[1]}`))&&g(s,"style",n),o&42){E=h[3].filter(h[7]),he();for(let u=0;u<c.length;u+=1)c[u].r();c=ae(c,o,y,1,h,E,i,e,ve,ze,null,Me);for(let u=0;u<c.length;u+=1)c[u].a();me()}o&4&&I(e,"isOpen",h[2]),(!f||o&1&&r!==(r="add-todo "+h[0]+" svelte-10cwdk9"))&&g(t,"class",r)},i(h){if(!f){for(let o=0;o<E.length;o+=1)B(c[o]);B(a.$$.fragment,h),f=!0}},o(h){for(let o=0;o<c.length;o+=1)R(c[o]);R(a.$$.fragment,h),f=!1},d(h){h&&k(t);for(let o=0;o<c.length;o+=1)c[o].d();J(a),_=!1,v()}}}function ft(l,t,e){let s;oe(l,Oe,E=>e(3,s=E));let{class:n=""}=t,c="#0029FF",i=!1;const a=E=>{let y={id:Date.now(),text:E.detail.value,color:c,done:!1,date:xe(new Date,"dot")};M.update(h=>h=[y,...h])},r=E=>E&&e(1,c=E),f=()=>e(2,i=!i),_=E=>E.color!=c,v=()=>e(2,i=!i);return l.$$set=E=>{"class"in E&&e(0,n=E.class)},[n,c,i,s,a,r,f,_,v]}class _t extends Y{constructor(t){super();Q(this,t,ft,ut,ie,{class:0})}}function dt(l){let t,e,s,n,c,i,a;return n=new _t({}),i=new ot({props:{class:"mt-50"}}),{c(){t=Ge(),e=T("section"),s=T("div"),W(n.$$.fragment),W(i.$$.fragment),this.h()},l(r){Je('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=$e(r),e=w(r,"SECTION",{class:!0});var _=C(e);s=w(_,"DIV",{class:!0});var v=C(s);Z(n.$$.fragment,v),v.forEach(k),_.forEach(k),Z(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",g(s,"class","container"),g(e,"class",c=""+(l[0]+" mt-50 svelte-veaq2y"))},m(r,f){q(r,t,f),q(r,e,f),O(e,s),G(n,s,null),G(i,r,f),a=!0},p(r,[f]){(!a||f&1&&c!==(c=""+(r[0]+" mt-50 svelte-veaq2y")))&&g(e,"class",c)},i(r){a||(B(n.$$.fragment,r),B(i.$$.fragment,r),a=!0)},o(r){R(n.$$.fragment,r),R(i.$$.fragment,r),a=!1},d(r){r&&k(t),r&&k(e),J(n),J(i,r)}}}function ht(l,t,e){let{class:s=""}=t;return l.$$set=n=>{"class"in n&&e(0,s=n.class)},[s]}class gt extends Y{constructor(t){super();Q(this,t,ht,dt,ie,{class:0})}}export{gt as default};