import{K as Ke,C as Re,S as Y,i as Q,L as Ye,e as T,c as w,a as C,d as k,b as h,f as L,D as O,M as F,N as H,O as ke,t as pe,g as be,P as I,h as Ee,Q as le,R as Qe,E as j,T as ye,U as se,r as We,V as ie,s as ne,v as W,w as X,x as Z,W as re,X as ce,Y as ue,p as M,Z as fe,_ as Te,n as V,$ as we,A as G,m as _e,o as de,a0 as Xe,a1 as he,a2 as ge,a3 as Ze,a4 as Ce,a5 as Ge,a6 as Ie,a7 as Oe,j as Je,a8 as $e,l as xe}from"../chunks/vendor-8ffd20c8.js";const B=Re([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),ze=Ke(B,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,r)=>n.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(i)}),et=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function tt(s){const t=window.getSelection(),e=t.baseOffset,l=t.baseNode;return console.log(t),console.log(l),{pos:e,node:l}}function De(s,t,e){const l=s.slice();return l[32]=t[e],l}function Ne(s,t){let e,l,n,u,i;return{key:s,first:null,c(){e=T("li"),l=T("button"),this.h()},l(a){e=w(a,"LI",{class:!0});var r=C(e);l=w(r,"BUTTON",{class:!0,style:!0}),C(l).forEach(k),r.forEach(k),this.h()},h(){h(l,"class","task__color-btn svelte-11gvzec"),h(l,"style",n=`background-color: ${t[32].color}`),h(e,"class","task__color-item svelte-11gvzec"),this.first=e},m(a,r){L(a,e,r),O(e,l),u||(i=F(l,"click",H(function(){ke(t[15](t[32].color))&&t[15](t[32].color).apply(this,arguments)})),u=!0)},p(a,r){t=a,r[0]&2052&&n!==(n=`background-color: ${t[32].color}`)&&h(l,"style",n)},d(a){a&&k(e),u=!1,i()}}}function lt(s){let t,e,l,n,u=`${s[1]}`,i,a,r,f,_,g,E,y,v,o,c=[],m=new Map,A,N,D,U,K,R,P=s[11].filter(s[24]);const J=p=>p[32].id;for(let p=0;p<P.length;p+=1){let b=De(s,P,p),q=J(b);m.set(q,c[p]=Ne(q,b))}return{c(){t=T("article"),e=T("div"),l=T("div"),n=T("p"),i=T("div"),a=T("div"),r=T("span"),f=pe(s[4]),_=T("div"),g=T("button"),E=T("span"),y=T("button"),v=T("span"),o=T("ul");for(let p=0;p<c.length;p+=1)c[p].c();N=T("button"),D=T("span"),this.h()},l(p){t=w(p,"ARTICLE",{class:!0});var b=C(t);e=w(b,"DIV",{class:!0});var q=C(e);l=w(q,"DIV",{class:!0});var $=C(l);n=w($,"P",{class:!0,contenteditable:!0});var ae=C(n);ae.forEach(k),$.forEach(k),i=w(q,"DIV",{class:!0});var x=C(i);a=w(x,"DIV",{class:!0});var ee=C(a);r=w(ee,"SPAN",{class:!0});var te=C(r);f=be(te,s[4]),te.forEach(k),ee.forEach(k),x.forEach(k),q.forEach(k),_=w(b,"DIV",{class:!0});var d=C(_);g=w(d,"BUTTON",{class:!0});var z=C(g);E=w(z,"SPAN",{class:!0}),C(E).forEach(k),z.forEach(k),y=w(d,"BUTTON",{class:!0});var S=C(y);v=w(S,"SPAN",{class:!0}),C(v).forEach(k),S.forEach(k),d.forEach(k),o=w(b,"UL",{class:!0,style:!0});var ve=C(o);for(let oe=0;oe<c.length;oe+=1)c[oe].l(ve);ve.forEach(k),N=w(b,"BUTTON",{class:!0});var me=C(N);D=w(me,"SPAN",{class:!0}),C(D).forEach(k),me.forEach(k),b.forEach(k),this.h()},h(){h(n,"class","task__main-content svelte-11gvzec"),h(n,"contenteditable",s[7]),h(l,"class","task__main-container svelte-11gvzec"),h(r,"class","svelte-11gvzec"),h(a,"class","task__info-content svelte-11gvzec"),h(i,"class","task__info svelte-11gvzec"),h(e,"class","task__main svelte-11gvzec"),I(e,"isEdit",s[7]),h(E,"class","svg-image-del svelte-11gvzec"),h(g,"class","task__menu-btn task__menu-btn_del svelte-11gvzec"),h(v,"class","svg-image-pen svelte-11gvzec"),h(y,"class","task__menu-btn task__menu-btn_edit svelte-11gvzec"),I(y,"isSelect",s[7]),I(y,"isChanged",s[8]),I(y,"isSave",s[9]),h(_,"class","task__circle task__menu svelte-11gvzec"),I(_,"isOpen",s[7]),h(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-11gvzec"),h(o,"style",A=`background-color: ${s[2]}`),I(o,"isOpen",s[7]),h(D,"class","svelte-11gvzec"),h(N,"class","task__info-open svelte-11gvzec"),I(N,"isHidden",s[7]),h(t,"class",U="task "+s[0]+" svelte-11gvzec"),I(t,"isDisabled",s[3]),I(t,"isInfoOpen",s[5]),I(t,"isEdit",s[7])},m(p,b){L(p,t,b),O(t,e),O(e,l),O(l,n),n.innerHTML=u,s[20](n),O(e,i),O(i,a),O(a,r),O(r,f),s[22](i),O(t,_),O(_,g),O(g,E),O(_,y),O(y,v),O(t,o);for(let q=0;q<c.length;q+=1)c[q].m(o,null);O(t,N),O(N,D),K||(R=[F(n,"input",s[21]),F(n,"keydown",s[17]),F(e,"click",s[12]),F(g,"click",H(s[13])),F(y,"click",H(s[23])),F(N,"click",H(s[25]))],K=!0)},p(p,b){b[0]&2&&u!==(u=`${p[1]}`)&&(n.innerHTML=u),b[0]&128&&h(n,"contenteditable",p[7]),b[0]&16&&Ee(f,p[4]),b[0]&128&&I(e,"isEdit",p[7]),b[0]&128&&I(y,"isSelect",p[7]),b[0]&256&&I(y,"isChanged",p[8]),b[0]&512&&I(y,"isSave",p[9]),b[0]&128&&I(_,"isOpen",p[7]),b[0]&34820&&(P=p[11].filter(p[24]),c=le(c,b,J,1,p,P,m,o,Qe,Ne,null,De)),b[0]&4&&A!==(A=`background-color: ${p[2]}`)&&h(o,"style",A),b[0]&128&&I(o,"isOpen",p[7]),b[0]&128&&I(N,"isHidden",p[7]),b[0]&1&&U!==(U="task "+p[0]+" svelte-11gvzec")&&h(t,"class",U),b[0]&9&&I(t,"isDisabled",p[3]),b[0]&33&&I(t,"isInfoOpen",p[5]),b[0]&129&&I(t,"isEdit",p[7])},i:j,o:j,d(p){p&&k(t),s[20](null),s[22](null);for(let b=0;b<c.length;b+=1)c[b].d();K=!1,ye(R)}}}let Se=new Set;function st(){Se.forEach(s=>{s.edit(!1)})}function nt(s,t,e){let l,n;se(s,B,d=>e(28,l=d)),se(s,ze,d=>e(11,n=d));let{class:u=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,g=!1,E,y=!1,v=!1,o=!1,c,m,A;const N=()=>{if(y===!1){let d=l.map(z=>(f===z.id&&(z.done=!z.done),z));B.set(d)}},D=()=>{let d=l.filter(z=>z.id!=f);B.set(d)};function U(d){e(7,y=d!=null?d:!y),y===!1&&P()}const K=d=>{let z=l.map(S=>(f===S.id&&(S.color=d),S));B.set(z)};function R(d){e(5,g=d!=null?d:!g);let z=0;E.childNodes.forEach(S=>z+=S.clientHeight),E.style.setProperty("--taskInfoHeight",`${g?z:0}px`)}function P(){if(v){tt();let d=c.innerHTML;J(d).then(()=>{e(8,v=!1),clearTimeout(m),e(9,o=!0),m=setTimeout(()=>{e(9,o=!1)},500)})}}We(()=>{});function J(d){if(typeof d=="string")return new Promise(z=>{B.set(l.map(S=>(S.id===f&&(S.text=d),S))),z()});throw new Error("The value is not equal to the string")}function p(d){let z=d.ctrlKey?!1:d.metaKey,S=d.keyCode;if(z&&S===83)return d.preventDefault(),P(),!1;clearTimeout(A),A=setTimeout(()=>P(),1e3)}function b(d=(z=>(z=c.innerHTML)!=null?z:i)()){return e(8,v=d!==i)}Se.add({save(){P()},edit(d){U(d)}});function q(d){ie[d?"unshift":"push"](()=>{c=d,e(10,c)})}const $=()=>b();function ae(d){ie[d?"unshift":"push"](()=>{E=d,e(6,E)})}const x=()=>{y===!1&&st(),U()},ee=d=>d.color!=a,te=()=>R();return s.$$set=d=>{"class"in d&&e(0,u=d.class),"text"in d&&e(1,i=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(19,f=d.id),"date"in d&&e(4,_=d.date)},[u,i,a,r,_,g,E,y,v,o,c,n,N,D,U,K,R,p,b,f,q,$,ae,x,ee,te]}class Fe extends Y{constructor(t){super();Q(this,t,nt,lt,Ye,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Ae(s,t,e){const l=s.slice();return l[4]=t[e],l}function qe(s,t,e){const l=s.slice();return l[4]=t[e],l}function Le(s,t){let e,l,n,u,i,a=j,r;return l=new Fe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=T("li"),W(l.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=C(e);X(l.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),Z(l,e,null),r=!0},p(f,_){t=f;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),l.$set(g)},r(){i=e.getBoundingClientRect()},f(){re(e),a(),ce(e,i)},a(){a(),a=ue(e,i,he,{duration:300})},i(f){r||(M(l.$$.fragment,f),fe(()=>{u&&u.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){V(l.$$.fragment,f),n&&n.invalidate(),u=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),G(l),f&&u&&u.end()}}}function Pe(s,t){let e,l,n,u,i,a=j,r;return l=new Fe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=T("li"),W(l.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=C(e);X(l.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),Z(l,e,null),r=!0},p(f,_){t=f;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),l.$set(g)},r(){i=e.getBoundingClientRect()},f(){re(e),a(),ce(e,i)},a(){a(),a=ue(e,i,he,{duration:300})},i(f){r||(M(l.$$.fragment,f),fe(()=>{u&&u.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){V(l.$$.fragment,f),n&&n.invalidate(),u=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),G(l),f&&u&&u.end()}}}function at(s){let t,e,l,n=[],u=new Map,i,a=[],r=new Map,f,_,g=s[1].filter(Ue);const E=o=>o[4].id;for(let o=0;o<g.length;o+=1){let c=qe(s,g,o),m=E(c);u.set(m,n[o]=Le(m,c))}let y=s[1].filter(Me);const v=o=>o[4].id;for(let o=0;o<y.length;o+=1){let c=Ae(s,y,o),m=v(c);r.set(m,a[o]=Pe(m,c))}return{c(){t=T("section"),e=T("div"),l=T("ul");for(let o=0;o<n.length;o+=1)n[o].c();i=T("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=w(o,"SECTION",{class:!0});var c=C(t);e=w(c,"DIV",{class:!0});var m=C(e);l=w(m,"UL",{class:!0});var A=C(l);for(let D=0;D<n.length;D+=1)n[D].l(A);A.forEach(k),i=w(m,"UL",{class:!0});var N=C(i);for(let D=0;D<a.length;D+=1)a[D].l(N);N.forEach(k),m.forEach(k),c.forEach(k),this.h()},h(){h(l,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-te6j4q"),h(t,"class",f="task-section "+s[0]+" svelte-te6j4q")},m(o,c){L(o,t,c),O(t,e),O(e,l);for(let m=0;m<n.length;m+=1)n[m].m(l,null);O(e,i);for(let m=0;m<a.length;m+=1)a[m].m(i,null);_=!0},p(o,[c]){if(c&2){g=o[1].filter(Ue),_e();for(let m=0;m<n.length;m+=1)n[m].r();n=le(n,c,E,1,o,g,u,l,ge,Le,null,qe);for(let m=0;m<n.length;m+=1)n[m].a();de()}if(c&2){y=o[1].filter(Me),_e();for(let m=0;m<a.length;m+=1)a[m].r();a=le(a,c,v,1,o,y,r,i,ge,Pe,null,Ae);for(let m=0;m<a.length;m+=1)a[m].a();de()}(!_||c&1&&f!==(f="task-section "+o[0]+" svelte-te6j4q"))&&h(t,"class",f)},i(o){if(!_){for(let c=0;c<g.length;c+=1)M(n[c]);for(let c=0;c<y.length;c+=1)M(a[c]);_=!0}},o(o){for(let c=0;c<n.length;c+=1)V(n[c]);for(let c=0;c<a.length;c+=1)V(a[c]);_=!1},d(o){o&&k(t);for(let c=0;c<n.length;c+=1)n[c].d();for(let c=0;c<a.length;c+=1)a[c].d()}}}const Ue=s=>!s.done,Me=s=>s.done;function ot(s,t,e){let l;se(s,B,a=>e(1,l=a));let{class:n=""}=t;const[u,i]=Xe({duration:a=>Math.sqrt(a*200),fallback(a,r){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Ze,css:g=>`
					transform: ${_} scale(${g});
					opacity: ${g}
				`}}});return s.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,l,u,i]}class it extends Y{constructor(t){super();Q(this,t,ot,at,ne,{class:0})}}function Ve(s){let t,e,l,n=s[2].text&&Be(s);return{c(){t=T("button"),n&&n.c(),this.h()},l(u){t=w(u,"BUTTON",{class:!0});var i=C(t);n&&n.l(i),i.forEach(k),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(u,i){L(u,t,i),n&&n.m(t,null),e||(l=F(t,"click",H(s[6])),e=!0)},p(u,i){u[2].text?n?n.p(u,i):(n=Be(u),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(u){u&&k(t),n&&n.d(),e=!1,l()}}}function Be(s){let t=s[2].text+"",e;return{c(){e=pe(t)},l(l){e=be(l,t)},m(l,n){L(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&Ee(e,t)},d(l){l&&k(e)}}}function rt(s){let t,e,l,n,u,i=s[2]&&Ve(s);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(a){t=w(a,"DIV",{class:!0});var r=C(t);e=w(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){h(e,"placeholder",s[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),I(t,"isError",s[5])},m(a,r){L(a,t,r),O(t,e),Ce(e,s[4]),i&&i.m(t,null),s[10](t),n||(u=[F(e,"input",s[9]),F(e,"input",s[7]),F(e,"keydown",s[8])],n=!0)},p(a,[r]){r&2&&h(e,"placeholder",a[1]),r&16&&e.value!==a[4]&&Ce(e,a[4]),a[2]?i?i.p(a,r):(i=Ve(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),r&37&&I(t,"isError",a[5])},i:j,o:j,d(a){a&&k(t),i&&i.d(),s[10](null),n=!1,ye(u)}}}function ct(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:u=null}=t,i,a,r=!1;const f=Ge(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,r=!0)},g=()=>{e(5,r=!1)},E=o=>{let c=o.key,m=o.ctrlKey,A=o.shiftKey;o.keyCode,m&&A&&f("color"),c==="Enter"&&_()};function y(){a=this.value,e(4,a)}function v(o){ie[o?"unshift":"push"](()=>{i=o,e(3,i)})}return s.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,u=o.btn)},[l,n,u,i,a,r,_,g,E,y,v]}class ut extends Y{constructor(t){super();Q(this,t,ct,rt,ne,{class:0,placeholder:1,btn:2})}}function He(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function je(s,t){let e,l,n,u,i=j,a,r,f;return{key:s,first:null,c(){e=T("button"),this.h()},l(_){e=w(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(k),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,g){L(_,e,g),a=!0,r||(f=F(e,"click",H(function(){ke(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,g){t=_,(!a||g&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){u=e.getBoundingClientRect()},f(){re(e),i(),ce(e,u)},a(){i(),i=ue(e,u,he,{})},i(_){a||(fe(()=>{n||(n=Ie(e,Oe,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ie(e,Oe,{},!1)),n.run(0),a=!1},d(_){_&&k(e),_&&n&&n.end(),r=!1,f()}}}function ft(s){let t,e,l,n,u=[],i=new Map,a,r,f,_,g,E=s[3].filter(s[7]);const y=v=>v[9].id;for(let v=0;v<E.length;v+=1){let o=He(s,E,v),c=y(o);i.set(c,u[v]=je(c,o))}return a=new ut({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",s[8]),a.$on("submit",s[4]),{c(){t=T("div"),e=T("div"),l=T("span");for(let v=0;v<u.length;v+=1)u[v].c();W(a.$$.fragment),this.h()},l(v){t=w(v,"DIV",{class:!0});var o=C(t);e=w(o,"DIV",{class:!0});var c=C(e);l=w(c,"SPAN",{class:!0,style:!0}),C(l).forEach(k);for(let m=0;m<u.length;m+=1)u[m].l(c);c.forEach(k),X(a.$$.fragment,o),o.forEach(k),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",n=`color: ${s[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),I(e,"isOpen",s[2]),h(t,"class",r="add-todo "+s[0]+" svelte-1hafqlz")},m(v,o){L(v,t,o),O(t,e),O(e,l);for(let c=0;c<u.length;c+=1)u[c].m(e,null);Z(a,t,null),f=!0,_||(g=F(l,"click",H(s[6])),_=!0)},p(v,[o]){if((!f||o&2&&n!==(n=`color: ${v[1]}`))&&h(l,"style",n),o&42){E=v[3].filter(v[7]),_e();for(let c=0;c<u.length;c+=1)u[c].r();u=le(u,o,y,1,v,E,i,e,ge,je,null,He);for(let c=0;c<u.length;c+=1)u[c].a();de()}o&4&&I(e,"isOpen",v[2]),(!f||o&1&&r!==(r="add-todo "+v[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(v){if(!f){for(let o=0;o<E.length;o+=1)M(u[o]);M(a.$$.fragment,v),f=!0}},o(v){for(let o=0;o<u.length;o+=1)V(u[o]);V(a.$$.fragment,v),f=!1},d(v){v&&k(t);for(let o=0;o<u.length;o+=1)u[o].d();G(a),_=!1,g()}}}function _t(s,t,e){let l;se(s,ze,E=>e(3,l=E));let{class:n=""}=t,u="#0029FF",i=!1;const a=E=>{let y={id:Date.now(),text:E.detail.value,color:u,done:!1,date:et(new Date,"dot")};B.update(v=>v=[y,...v])},r=E=>E&&e(1,u=E),f=()=>e(2,i=!i),_=E=>E.color!=u,g=()=>e(2,i=!i);return s.$$set=E=>{"class"in E&&e(0,n=E.class)},[n,u,i,l,a,r,f,_,g]}class dt extends Y{constructor(t){super();Q(this,t,_t,ft,ne,{class:0})}}function ht(s){let t,e,l,n,u,i,a;return n=new dt({}),i=new it({props:{class:"mt-50"}}),{c(){t=Je(),e=T("section"),l=T("div"),W(n.$$.fragment),W(i.$$.fragment),this.h()},l(r){$e('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=xe(r),e=w(r,"SECTION",{class:!0});var _=C(e);l=w(_,"DIV",{class:!0});var g=C(l);X(n.$$.fragment,g),g.forEach(k),_.forEach(k),X(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",u=""+(s[0]+" mt-50 svelte-110abfo"))},m(r,f){L(r,t,f),L(r,e,f),O(e,l),Z(n,l,null),Z(i,r,f),a=!0},p(r,[f]){(!a||f&1&&u!==(u=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",u)},i(r){a||(M(n.$$.fragment,r),M(i.$$.fragment,r),a=!0)},o(r){V(n.$$.fragment,r),V(i.$$.fragment,r),a=!1},d(r){r&&k(t),r&&k(e),G(n),G(i,r)}}}function gt(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class mt extends Y{constructor(t){super();Q(this,t,gt,ht,ne,{class:0})}}export{mt as default};