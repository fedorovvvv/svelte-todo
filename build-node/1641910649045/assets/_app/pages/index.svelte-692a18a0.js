import{K as Ke,C as He,S as j,i as Y,L as je,e as E,c as T,a as C,d as k,b as d,f as S,D as I,M as N,N as M,O as qe,t as ae,g as oe,P as w,h as ie,Q as ee,R as Ye,E as R,T as ye,U as te,V as re,s as le,v as Q,w as W,x as X,W as ce,X as ue,Y as fe,p as U,Z as _e,_ as Ee,n as P,$ as Te,A as Z,m as de,o as he,a0 as Qe,a1 as me,a2 as ve,a3 as We,a4 as Ce,a5 as Xe,a6 as Ie,a7 as we,j as Ze,a8 as Ge,l as Je}from"../chunks/vendor-8ffd20c8.js";const K=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),ze=Ke(K,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,c)=>n.indexOf(a)===c).map((a,c)=>({id:c,color:a}));t(i)});function De(s,t,e){const l=s.slice();return l[29]=t[e],l}function Oe(s,t){let e,l,n,u,i;return{key:s,first:null,c(){e=E("li"),l=E("button"),this.h()},l(a){e=T(a,"LI",{class:!0});var c=C(e);l=T(c,"BUTTON",{class:!0,style:!0}),C(l).forEach(k),c.forEach(k),this.h()},h(){d(l,"class","task__color-btn svelte-1qqhzsn"),d(l,"style",n=`background-color: ${t[29].color}`),d(e,"class","task__color-item svelte-1qqhzsn"),this.first=e},m(a,c){S(a,e,c),I(e,l),u||(i=N(l,"click",M(function(){qe(t[14](t[29].color))&&t[14](t[29].color).apply(this,arguments)})),u=!0)},p(a,c){t=a,c[0]&1028&&n!==(n=`background-color: ${t[29].color}`)&&d(l,"style",n)},d(a){a&&k(e),u=!1,i()}}}function $e(s){let t,e,l,n,u,i,a,c,f,_,m,b,y,g,r,o=[],v=new Map,V,D,O,B,H,G,L=s[10].filter(s[23]);const J=p=>p[29].id;for(let p=0;p<L.length;p+=1){let q=De(s,L,p),F=J(q);v.set(F,o[p]=Oe(F,q))}return{c(){t=E("div"),e=E("div"),l=E("div"),n=E("p"),u=ae(s[1]),i=E("div"),a=E("div"),c=E("span"),f=ae(s[4]),_=E("div"),m=E("button"),b=E("span"),y=E("button"),g=E("span"),r=E("ul");for(let p=0;p<o.length;p+=1)o[p].c();D=E("button"),O=E("span"),this.h()},l(p){t=T(p,"DIV",{class:!0});var q=C(t);e=T(q,"DIV",{class:!0});var F=C(e);l=T(F,"DIV",{class:!0});var $=C(l);n=T($,"P",{class:!0,contenteditable:!0});var x=C(n);u=oe(x,s[1]),x.forEach(k),$.forEach(k),i=T(F,"DIV",{class:!0});var h=C(i);a=T(h,"DIV",{class:!0});var z=C(a);c=T(z,"SPAN",{class:!0});var A=C(c);f=oe(A,s[4]),A.forEach(k),z.forEach(k),h.forEach(k),F.forEach(k),_=T(q,"DIV",{class:!0});var se=C(_);m=T(se,"BUTTON",{class:!0});var ge=C(m);b=T(ge,"SPAN",{class:!0}),C(b).forEach(k),ge.forEach(k),y=T(se,"BUTTON",{class:!0});var ke=C(y);g=T(ke,"SPAN",{class:!0}),C(g).forEach(k),ke.forEach(k),se.forEach(k),r=T(q,"UL",{class:!0,style:!0});var pe=C(r);for(let ne=0;ne<o.length;ne+=1)o[ne].l(pe);pe.forEach(k),D=T(q,"BUTTON",{class:!0});var be=C(D);O=T(be,"SPAN",{class:!0}),C(O).forEach(k),be.forEach(k),q.forEach(k),this.h()},h(){d(n,"class","task__main-content svelte-1qqhzsn"),d(n,"contenteditable",s[7]),d(l,"class","task__main-container svelte-1qqhzsn"),d(c,"class","svelte-1qqhzsn"),d(a,"class","task__info-content svelte-1qqhzsn"),d(i,"class","task__info svelte-1qqhzsn"),d(e,"class","task__main svelte-1qqhzsn"),w(e,"isEdit",s[7]),d(b,"class","svg-image-del svelte-1qqhzsn"),d(m,"class","task__menu-btn task__menu-btn_del svelte-1qqhzsn"),d(g,"class","svg-image-pen svelte-1qqhzsn"),d(y,"class","task__menu-btn task__menu-btn_edit svelte-1qqhzsn"),w(y,"isSelect",s[7]),w(y,"isSave",s[8]),w(y,"isChanged",s[8]),d(_,"class","task__circle task__menu svelte-1qqhzsn"),w(_,"isOpen",s[7]),d(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1qqhzsn"),d(r,"style",V=`background-color: ${s[2]}`),w(r,"isOpen",s[7]),d(O,"class","svelte-1qqhzsn"),d(D,"class","task__info-open svelte-1qqhzsn"),w(D,"isHidden",s[7]),d(t,"class",B="task "+s[0]+" svelte-1qqhzsn"),w(t,"isDisabled",s[3]),w(t,"isInfoOpen",s[5])},m(p,q){S(p,t,q),I(t,e),I(e,l),I(l,n),I(n,u),s[19](n),I(e,i),I(i,a),I(a,c),I(c,f),s[21](i),I(t,_),I(_,m),I(m,b),I(_,y),I(y,g),I(t,r);for(let F=0;F<o.length;F+=1)o[F].m(r,null);I(t,D),I(D,O),H||(G=[N(n,"input",s[20]),N(n,"keydown",s[16]),N(e,"click",s[11]),N(m,"click",M(s[12])),N(y,"click",M(s[22])),N(D,"click",M(s[24]))],H=!0)},p(p,q){q[0]&2&&ie(u,p[1]),q[0]&128&&d(n,"contenteditable",p[7]),q[0]&16&&ie(f,p[4]),q[0]&128&&w(e,"isEdit",p[7]),q[0]&128&&w(y,"isSelect",p[7]),q[0]&256&&w(y,"isSave",p[8]),q[0]&256&&w(y,"isChanged",p[8]),q[0]&128&&w(_,"isOpen",p[7]),q[0]&17412&&(L=p[10].filter(p[23]),o=ee(o,q,J,1,p,L,v,r,Ye,Oe,null,De)),q[0]&4&&V!==(V=`background-color: ${p[2]}`)&&d(r,"style",V),q[0]&128&&w(r,"isOpen",p[7]),q[0]&128&&w(D,"isHidden",p[7]),q[0]&1&&B!==(B="task "+p[0]+" svelte-1qqhzsn")&&d(t,"class",B),q[0]&9&&w(t,"isDisabled",p[3]),q[0]&33&&w(t,"isInfoOpen",p[5])},i:R,o:R,d(p){p&&k(t),s[19](null),s[21](null);for(let q=0;q<o.length;q+=1)o[q].d();H=!1,ye(G)}}}function xe(s,t,e){let l,n;te(s,K,h=>e(27,l=h)),te(s,ze,h=>e(10,n=h));let{class:u=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:c=!1}=t,{id:f=null}=t,{date:_=""}=t,m=!1,b,y=!1,g=!1,r,o;const v=()=>{if(y===!1){let h=l.map(z=>(f===z.id&&(z.done=!z.done),z));K.set(h)}},V=()=>{let h=l.filter(z=>z.id!=f);K.set(h)};function D(h){e(7,y=h!=null?h:!y),y===!1&&H()}const O=h=>{let z=l.map(A=>(f===A.id&&(A.color=h),A));K.set(z)};function B(h){e(5,m=h!=null?h:!m);let z=0;b.childNodes.forEach(A=>z+=A.clientHeight),b.style.setProperty("--taskInfoHeight",`${m?z:0}px`)}function H(){r.innerText,clearTimeout(o),o=setTimeout(()=>{},500),console.log("save",i)}function G(h){let z=h.ctrlKey?!1:h.metaKey,A=h.keyCode;if(z&&A===83)return h.preventDefault(),H(),!1}function L(h=(z=>(z=r.innerText)!=null?z:i)()){return e(8,g=h!==i)}function J(h){re[h?"unshift":"push"](()=>{r=h,e(9,r)})}const p=()=>L();function q(h){re[h?"unshift":"push"](()=>{b=h,e(6,b)})}const F=()=>D(),$=h=>h.color!=a,x=()=>B();return s.$$set=h=>{"class"in h&&e(0,u=h.class),"text"in h&&e(1,i=h.text),"color"in h&&e(2,a=h.color),"disabled"in h&&e(3,c=h.disabled),"id"in h&&e(18,f=h.id),"date"in h&&e(4,_=h.date)},[u,i,a,c,_,m,b,y,g,r,n,v,V,D,O,B,G,L,f,J,p,q,F,$,x]}class Ne extends j{constructor(t){super();Y(this,t,xe,$e,je,{class:0,text:1,color:2,disabled:3,id:18,date:4},null,[-1,-1])}}function Fe(s,t,e){const l=s.slice();return l[4]=t[e],l}function Se(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ae(s,t){let e,l,n,u,i,a=R,c;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=E("li"),Q(l.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=C(e);W(l.$$.fragment,_),_.forEach(k),this.h()},h(){d(e,"class","task-section__item"),this.first=e},m(f,_){S(f,e,_),X(l,e,null),c=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){ce(e),a(),ue(e,i)},a(){a(),a=fe(e,i,me,{duration:300})},i(f){c||(U(l.$$.fragment,f),_e(()=>{u&&u.end(1),n=Ee(e,t[3],{key:t[4].id}),n.start()}),c=!0)},o(f){P(l.$$.fragment,f),n&&n.invalidate(),u=Te(e,t[2],{key:t[4].id}),c=!1},d(f){f&&k(e),Z(l),f&&u&&u.end()}}}function Ve(s,t){let e,l,n,u,i,a=R,c;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=E("li"),Q(l.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=C(e);W(l.$$.fragment,_),_.forEach(k),this.h()},h(){d(e,"class","task-section__item"),this.first=e},m(f,_){S(f,e,_),X(l,e,null),c=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){ce(e),a(),ue(e,i)},a(){a(),a=fe(e,i,me,{duration:300})},i(f){c||(U(l.$$.fragment,f),_e(()=>{u&&u.end(1),n=Ee(e,t[3],{key:t[4].id}),n.start()}),c=!0)},o(f){P(l.$$.fragment,f),n&&n.invalidate(),u=Te(e,t[2],{key:t[4].id}),c=!1},d(f){f&&k(e),Z(l),f&&u&&u.end()}}}function et(s){let t,e,l,n=[],u=new Map,i,a=[],c=new Map,f,_,m=s[1].filter(Ue);const b=r=>r[4].id;for(let r=0;r<m.length;r+=1){let o=Se(s,m,r),v=b(o);u.set(v,n[r]=Ae(v,o))}let y=s[1].filter(Pe);const g=r=>r[4].id;for(let r=0;r<y.length;r+=1){let o=Fe(s,y,r),v=g(o);c.set(v,a[r]=Ve(v,o))}return{c(){t=E("section"),e=E("div"),l=E("ul");for(let r=0;r<n.length;r+=1)n[r].c();i=E("ul");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){t=T(r,"SECTION",{class:!0});var o=C(t);e=T(o,"DIV",{class:!0});var v=C(e);l=T(v,"UL",{class:!0});var V=C(l);for(let O=0;O<n.length;O+=1)n[O].l(V);V.forEach(k),i=T(v,"UL",{class:!0});var D=C(i);for(let O=0;O<a.length;O+=1)a[O].l(D);D.forEach(k),v.forEach(k),o.forEach(k),this.h()},h(){d(l,"class","task-section__col"),d(i,"class","task-section__col"),d(e,"class","container task-section__grid svelte-q8mvyt"),d(t,"class",f="task-section "+s[0]+" svelte-q8mvyt")},m(r,o){S(r,t,o),I(t,e),I(e,l);for(let v=0;v<n.length;v+=1)n[v].m(l,null);I(e,i);for(let v=0;v<a.length;v+=1)a[v].m(i,null);_=!0},p(r,[o]){if(o&2){m=r[1].filter(Ue),de();for(let v=0;v<n.length;v+=1)n[v].r();n=ee(n,o,b,1,r,m,u,l,ve,Ae,null,Se);for(let v=0;v<n.length;v+=1)n[v].a();he()}if(o&2){y=r[1].filter(Pe),de();for(let v=0;v<a.length;v+=1)a[v].r();a=ee(a,o,g,1,r,y,c,i,ve,Ve,null,Fe);for(let v=0;v<a.length;v+=1)a[v].a();he()}(!_||o&1&&f!==(f="task-section "+r[0]+" svelte-q8mvyt"))&&d(t,"class",f)},i(r){if(!_){for(let o=0;o<m.length;o+=1)U(n[o]);for(let o=0;o<y.length;o+=1)U(a[o]);_=!0}},o(r){for(let o=0;o<n.length;o+=1)P(n[o]);for(let o=0;o<a.length;o+=1)P(a[o]);_=!1},d(r){r&&k(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<a.length;o+=1)a[o].d()}}}const Ue=s=>!s.done,Pe=s=>s.done;function tt(s,t,e){let l;te(s,K,a=>e(1,l=a));let{class:n=""}=t;const[u,i]=Qe({duration:a=>Math.sqrt(a*200),fallback(a,c){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:We,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return s.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,l,u,i]}class lt extends j{constructor(t){super();Y(this,t,tt,et,le,{class:0})}}const st=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Be(s){let t,e,l,n=s[2].text&&Le(s);return{c(){t=E("button"),n&&n.c(),this.h()},l(u){t=T(u,"BUTTON",{class:!0});var i=C(t);n&&n.l(i),i.forEach(k),this.h()},h(){d(t,"class","btn svelte-1yy2xse")},m(u,i){S(u,t,i),n&&n.m(t,null),e||(l=N(t,"click",M(s[6])),e=!0)},p(u,i){u[2].text?n?n.p(u,i):(n=Le(u),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(u){u&&k(t),n&&n.d(),e=!1,l()}}}function Le(s){let t=s[2].text+"",e;return{c(){e=ae(t)},l(l){e=oe(l,t)},m(l,n){S(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&ie(e,t)},d(l){l&&k(e)}}}function nt(s){let t,e,l,n,u,i=s[2]&&Be(s);return{c(){t=E("div"),e=E("input"),i&&i.c(),this.h()},l(a){t=T(a,"DIV",{class:!0});var c=C(t);e=T(c,"INPUT",{placeholder:!0,class:!0}),i&&i.l(c),c.forEach(k),this.h()},h(){d(e,"placeholder",s[1]),d(e,"class","svelte-1yy2xse"),d(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),w(t,"isError",s[5])},m(a,c){S(a,t,c),I(t,e),Ce(e,s[4]),i&&i.m(t,null),s[11](t),n||(u=[N(e,"input",s[9]),N(e,"input",s[7]),N(e,"keydown",s[10])],n=!0)},p(a,[c]){c&2&&d(e,"placeholder",a[1]),c&16&&e.value!==a[4]&&Ce(e,a[4]),a[2]?i?i.p(a,c):(i=Be(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),c&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&d(t,"class",l),c&37&&w(t,"isError",a[5])},i:R,o:R,d(a){a&&k(t),i&&i.d(),s[11](null),n=!1,ye(u)}}}function at(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:u=null}=t,i,a,c=!1;const f=Xe(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,c=!0)},m=()=>{e(5,c=!1)},b=o=>{let v=o.key;v==="Control"&&f("color"),v==="Enter"&&_()};function y(){a=this.value,e(4,a)}const g=o=>b(o);function r(o){re[o?"unshift":"push"](()=>{i=o,e(3,i)})}return s.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,u=o.btn)},[l,n,u,i,a,c,_,m,b,y,g,r]}class ot extends j{constructor(t){super();Y(this,t,at,nt,le,{class:0,placeholder:1,btn:2})}}function Me(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function Re(s,t){let e,l,n,u,i=R,a,c,f;return{key:s,first:null,c(){e=E("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(k),this.h()},h(){d(e,"class","add-todo__color svelte-1hafqlz"),d(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,m){S(_,e,m),a=!0,c||(f=N(e,"click",M(function(){qe(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(_,m){t=_,(!a||m&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&d(e,"style",l)},r(){u=e.getBoundingClientRect()},f(){ce(e),i(),ue(e,u)},a(){i(),i=fe(e,u,me,{})},i(_){a||(_e(()=>{n||(n=Ie(e,we,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ie(e,we,{},!1)),n.run(0),a=!1},d(_){_&&k(e),_&&n&&n.end(),c=!1,f()}}}function it(s){let t,e,l,n,u=[],i=new Map,a,c,f,_,m,b=s[3].filter(s[7]);const y=g=>g[9].id;for(let g=0;g<b.length;g+=1){let r=Me(s,b,g),o=y(r);i.set(o,u[g]=Re(o,r))}return a=new ot({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",s[8]),a.$on("submit",s[4]),{c(){t=E("div"),e=E("div"),l=E("span");for(let g=0;g<u.length;g+=1)u[g].c();Q(a.$$.fragment),this.h()},l(g){t=T(g,"DIV",{class:!0});var r=C(t);e=T(r,"DIV",{class:!0});var o=C(e);l=T(o,"SPAN",{class:!0,style:!0}),C(l).forEach(k);for(let v=0;v<u.length;v+=1)u[v].l(o);o.forEach(k),W(a.$$.fragment,r),r.forEach(k),this.h()},h(){d(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),d(l,"style",n=`color: ${s[1]}`),d(e,"class","add-todo__color-list svelte-1hafqlz"),w(e,"isOpen",s[2]),d(t,"class",c="add-todo "+s[0]+" svelte-1hafqlz")},m(g,r){S(g,t,r),I(t,e),I(e,l);for(let o=0;o<u.length;o+=1)u[o].m(e,null);X(a,t,null),f=!0,_||(m=N(l,"click",M(s[6])),_=!0)},p(g,[r]){if((!f||r&2&&n!==(n=`color: ${g[1]}`))&&d(l,"style",n),r&42){b=g[3].filter(g[7]),de();for(let o=0;o<u.length;o+=1)u[o].r();u=ee(u,r,y,1,g,b,i,e,ve,Re,null,Me);for(let o=0;o<u.length;o+=1)u[o].a();he()}r&4&&w(e,"isOpen",g[2]),(!f||r&1&&c!==(c="add-todo "+g[0]+" svelte-1hafqlz"))&&d(t,"class",c)},i(g){if(!f){for(let r=0;r<b.length;r+=1)U(u[r]);U(a.$$.fragment,g),f=!0}},o(g){for(let r=0;r<u.length;r+=1)P(u[r]);P(a.$$.fragment,g),f=!1},d(g){g&&k(t);for(let r=0;r<u.length;r+=1)u[r].d();Z(a),_=!1,m()}}}function rt(s,t,e){let l;te(s,ze,b=>e(3,l=b));let{class:n=""}=t,u="#0029FF",i=!1;const a=b=>{let y={id:Date.now(),text:b.detail.value,color:u,done:!1,date:st(new Date,"dot")};K.update(g=>g=[y,...g])},c=b=>b&&e(1,u=b),f=()=>e(2,i=!i),_=b=>b.color!=u,m=()=>e(2,i=!i);return s.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,u,i,l,a,c,f,_,m]}class ct extends j{constructor(t){super();Y(this,t,rt,it,le,{class:0})}}function ut(s){let t,e,l,n,u,i,a;return n=new ct({}),i=new lt({props:{class:"mt-50"}}),{c(){t=Ze(),e=E("section"),l=E("div"),Q(n.$$.fragment),Q(i.$$.fragment),this.h()},l(c){Ge('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=Je(c),e=T(c,"SECTION",{class:!0});var _=C(e);l=T(_,"DIV",{class:!0});var m=C(l);W(n.$$.fragment,m),m.forEach(k),_.forEach(k),W(i.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",d(l,"class","container"),d(e,"class",u=""+(s[0]+" mt-50 svelte-110abfo"))},m(c,f){S(c,t,f),S(c,e,f),I(e,l),X(n,l,null),X(i,c,f),a=!0},p(c,[f]){(!a||f&1&&u!==(u=""+(c[0]+" mt-50 svelte-110abfo")))&&d(e,"class",u)},i(c){a||(U(n.$$.fragment,c),U(i.$$.fragment,c),a=!0)},o(c){P(n.$$.fragment,c),P(i.$$.fragment,c),a=!1},d(c){c&&k(t),c&&k(e),Z(n),Z(i,c)}}}function ft(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class dt extends j{constructor(t){super();Y(this,t,ft,ut,le,{class:0})}}export{dt as default};