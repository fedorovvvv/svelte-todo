import{K as ze,C as Ke,S as Y,i as Q,L as He,e as T,c as C,a as w,d as g,b as h,f as A,D as I,M as F,N as L,O as ye,t as ae,g as ie,P as O,h as re,Q as le,R as Ye,E as M,T as Ee,U as se,V as ce,s as ne,v as W,w as X,x as Z,W as fe,X as ue,Y as _e,p as U,Z as de,_ as Te,n as P,$ as Ce,A as G,m as he,o as me,a0 as Qe,a1 as ve,a2 as pe,a3 as We,a4 as we,a5 as Xe,a6 as Ie,a7 as De,j as Ze,a8 as Ge,l as Je}from"../chunks/vendor-8ffd20c8.js";const B=Ke([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=ze(B,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(o=>o.color).map(o=>o.color).concat(e),i=n.filter((o,r)=>n.indexOf(o)===r).map((o,r)=>({id:r,color:o}));t(i)});function Ne(s,t,e){const l=s.slice();return l[30]=t[e],l}function je(s,t){let e,l,n,f,i;return{key:s,first:null,c(){e=T("li"),l=T("button"),this.h()},l(o){e=C(o,"LI",{class:!0});var r=w(e);l=C(r,"BUTTON",{class:!0,style:!0}),w(l).forEach(g),r.forEach(g),this.h()},h(){h(l,"class","task__color-btn svelte-fjo75p"),h(l,"style",n=`background-color: ${t[30].color}`),h(e,"class","task__color-item svelte-fjo75p"),this.first=e},m(o,r){A(o,e,r),I(e,l),f||(i=F(l,"click",L(function(){ye(t[15](t[30].color))&&t[15](t[30].color).apply(this,arguments)})),f=!0)},p(o,r){t=o,r[0]&2052&&n!==(n=`background-color: ${t[30].color}`)&&h(l,"style",n)},d(o){o&&g(e),f=!1,i()}}}function $e(s){let t,e,l,n,f,i,o,r,u,_,m,b,E,v,c,a=[],p=new Map,V,j,N,R,z,H,K=s[11].filter(s[24]);const J=k=>k[30].id;for(let k=0;k<K.length;k+=1){let y=Ne(s,K,k),S=J(y);p.set(S,a[k]=je(S,y))}return{c(){t=T("div"),e=T("div"),l=T("div"),n=T("p"),f=ae(s[1]),i=T("div"),o=T("div"),r=T("span"),u=ae(s[4]),_=T("div"),m=T("button"),b=T("span"),E=T("button"),v=T("span"),c=T("ul");for(let k=0;k<a.length;k+=1)a[k].c();j=T("button"),N=T("span"),this.h()},l(k){t=C(k,"DIV",{class:!0});var y=w(t);e=C(y,"DIV",{class:!0});var S=w(e);l=C(S,"DIV",{class:!0});var $=w(l);n=C($,"P",{class:!0,contenteditable:!0});var x=w(n);f=ie(x,s[1]),x.forEach(g),$.forEach(g),i=C(S,"DIV",{class:!0});var ee=w(i);o=C(ee,"DIV",{class:!0});var te=w(o);r=C(te,"SPAN",{class:!0});var d=w(r);u=ie(d,s[4]),d.forEach(g),te.forEach(g),ee.forEach(g),S.forEach(g),_=C(y,"DIV",{class:!0});var D=w(_);m=C(D,"BUTTON",{class:!0});var q=w(m);b=C(q,"SPAN",{class:!0}),w(b).forEach(g),q.forEach(g),E=C(D,"BUTTON",{class:!0});var ge=w(E);v=C(ge,"SPAN",{class:!0}),w(v).forEach(g),ge.forEach(g),D.forEach(g),c=C(y,"UL",{class:!0,style:!0});var ke=w(c);for(let oe=0;oe<a.length;oe+=1)a[oe].l(ke);ke.forEach(g),j=C(y,"BUTTON",{class:!0});var be=w(j);N=C(be,"SPAN",{class:!0}),w(N).forEach(g),be.forEach(g),y.forEach(g),this.h()},h(){h(n,"class","task__main-content svelte-fjo75p"),h(n,"contenteditable",s[7]),h(l,"class","task__main-container svelte-fjo75p"),h(r,"class","svelte-fjo75p"),h(o,"class","task__info-content svelte-fjo75p"),h(i,"class","task__info svelte-fjo75p"),h(e,"class","task__main svelte-fjo75p"),O(e,"isEdit",s[7]),h(b,"class","svg-image-del svelte-fjo75p"),h(m,"class","task__menu-btn task__menu-btn_del svelte-fjo75p"),h(v,"class","svg-image-pen svelte-fjo75p"),h(E,"class","task__menu-btn task__menu-btn_edit svelte-fjo75p"),O(E,"isSelect",s[7]),O(E,"isChanged",s[8]),O(E,"isSave",s[9]),h(_,"class","task__circle task__menu svelte-fjo75p"),O(_,"isOpen",s[7]),h(c,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-fjo75p"),h(c,"style",V=`background-color: ${s[2]}`),O(c,"isOpen",s[7]),h(N,"class","svelte-fjo75p"),h(j,"class","task__info-open svelte-fjo75p"),O(j,"isHidden",s[7]),h(t,"class",R="task "+s[0]+" svelte-fjo75p"),O(t,"isDisabled",s[3]),O(t,"isInfoOpen",s[5])},m(k,y){A(k,t,y),I(t,e),I(e,l),I(l,n),I(n,f),s[20](n),I(e,i),I(i,o),I(o,r),I(r,u),s[22](i),I(t,_),I(_,m),I(m,b),I(_,E),I(E,v),I(t,c);for(let S=0;S<a.length;S+=1)a[S].m(c,null);I(t,j),I(j,N),z||(H=[F(n,"input",s[21]),F(n,"keydown",s[17]),F(e,"click",s[12]),F(m,"click",L(s[13])),F(E,"click",L(s[23])),F(j,"click",L(s[25]))],z=!0)},p(k,y){y[0]&2&&re(f,k[1]),y[0]&128&&h(n,"contenteditable",k[7]),y[0]&16&&re(u,k[4]),y[0]&128&&O(e,"isEdit",k[7]),y[0]&128&&O(E,"isSelect",k[7]),y[0]&256&&O(E,"isChanged",k[8]),y[0]&512&&O(E,"isSave",k[9]),y[0]&128&&O(_,"isOpen",k[7]),y[0]&34820&&(K=k[11].filter(k[24]),a=le(a,y,J,1,k,K,p,c,Ye,je,null,Ne)),y[0]&4&&V!==(V=`background-color: ${k[2]}`)&&h(c,"style",V),y[0]&128&&O(c,"isOpen",k[7]),y[0]&128&&O(j,"isHidden",k[7]),y[0]&1&&R!==(R="task "+k[0]+" svelte-fjo75p")&&h(t,"class",R),y[0]&9&&O(t,"isDisabled",k[3]),y[0]&33&&O(t,"isInfoOpen",k[5])},i:M,o:M,d(k){k&&g(t),s[20](null),s[22](null);for(let y=0;y<a.length;y+=1)a[y].d();z=!1,Ee(H)}}}function xe(s,t,e){let l,n;se(s,B,d=>e(27,l=d)),se(s,Oe,d=>e(11,n=d));let{class:f=""}=t,{text:i=""}=t,{color:o="#0029FF"}=t,{disabled:r=!1}=t,{id:u=null}=t,{date:_=""}=t,m=!1,b,E=!1,v=!1,c=!1,a,p;const V=()=>{if(E===!1){let d=l.map(D=>(u===D.id&&(D.done=!D.done),D));B.set(d)}},j=()=>{let d=l.filter(D=>D.id!=u);B.set(d)};function N(d){e(7,E=d!=null?d:!E),E===!1&&H()}const R=d=>{let D=l.map(q=>(u===q.id&&(q.color=d),q));B.set(D)};function z(d){e(5,m=d!=null?d:!m);let D=0;b.childNodes.forEach(q=>D+=q.clientHeight),b.style.setProperty("--taskInfoHeight",`${m?D:0}px`)}function H(){if(v){let d=a.innerText;K(d),e(8,v=!1),clearTimeout(p),e(9,c=!0),p=setTimeout(()=>{e(9,c=!1)},500),console.log("save",i)}}function K(d){if(typeof d=="string")B.set(l.map(D=>(D.id===u&&(D.text=d),D)));else throw new Error("The value is not equal to the string")}function J(d){let D=d.ctrlKey?!1:d.metaKey,q=d.keyCode;if(D&&q===83)return d.preventDefault(),H(),!1}function k(d=(D=>(D=a.innerText)!=null?D:i)()){return e(8,v=d!==i)}function y(d){ce[d?"unshift":"push"](()=>{a=d,e(10,a)})}const S=()=>k();function $(d){ce[d?"unshift":"push"](()=>{b=d,e(6,b)})}const x=()=>N(),ee=d=>d.color!=o,te=()=>z();return s.$$set=d=>{"class"in d&&e(0,f=d.class),"text"in d&&e(1,i=d.text),"color"in d&&e(2,o=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(19,u=d.id),"date"in d&&e(4,_=d.date)},[f,i,o,r,_,m,b,E,v,c,a,n,V,j,N,R,z,J,k,u,y,S,$,x,ee,te]}class Fe extends Y{constructor(t){super();Q(this,t,xe,$e,He,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Se(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ae(s,t,e){const l=s.slice();return l[4]=t[e],l}function qe(s,t){let e,l,n,f,i,o=M,r;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=T("li"),W(l.$$.fragment),this.h()},l(u){e=C(u,"LI",{class:!0});var _=w(e);X(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(u,_){A(u,e,_),Z(l,e,null),r=!0},p(u,_){t=u;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){fe(e),o(),ue(e,i)},a(){o(),o=_e(e,i,ve,{duration:300})},i(u){r||(U(l.$$.fragment,u),de(()=>{f&&f.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){P(l.$$.fragment,u),n&&n.invalidate(),f=Ce(e,t[2],{key:t[4].id}),r=!1},d(u){u&&g(e),G(l),u&&f&&f.end()}}}function Ve(s,t){let e,l,n,f,i,o=M,r;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=T("li"),W(l.$$.fragment),this.h()},l(u){e=C(u,"LI",{class:!0});var _=w(e);X(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(u,_){A(u,e,_),Z(l,e,null),r=!0},p(u,_){t=u;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){fe(e),o(),ue(e,i)},a(){o(),o=_e(e,i,ve,{duration:300})},i(u){r||(U(l.$$.fragment,u),de(()=>{f&&f.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){P(l.$$.fragment,u),n&&n.invalidate(),f=Ce(e,t[2],{key:t[4].id}),r=!1},d(u){u&&g(e),G(l),u&&f&&f.end()}}}function et(s){let t,e,l,n=[],f=new Map,i,o=[],r=new Map,u,_,m=s[1].filter(Ue);const b=c=>c[4].id;for(let c=0;c<m.length;c+=1){let a=Ae(s,m,c),p=b(a);f.set(p,n[c]=qe(p,a))}let E=s[1].filter(Pe);const v=c=>c[4].id;for(let c=0;c<E.length;c+=1){let a=Se(s,E,c),p=v(a);r.set(p,o[c]=Ve(p,a))}return{c(){t=T("section"),e=T("div"),l=T("ul");for(let c=0;c<n.length;c+=1)n[c].c();i=T("ul");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){t=C(c,"SECTION",{class:!0});var a=w(t);e=C(a,"DIV",{class:!0});var p=w(e);l=C(p,"UL",{class:!0});var V=w(l);for(let N=0;N<n.length;N+=1)n[N].l(V);V.forEach(g),i=C(p,"UL",{class:!0});var j=w(i);for(let N=0;N<o.length;N+=1)o[N].l(j);j.forEach(g),p.forEach(g),a.forEach(g),this.h()},h(){h(l,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-q8mvyt"),h(t,"class",u="task-section "+s[0]+" svelte-q8mvyt")},m(c,a){A(c,t,a),I(t,e),I(e,l);for(let p=0;p<n.length;p+=1)n[p].m(l,null);I(e,i);for(let p=0;p<o.length;p+=1)o[p].m(i,null);_=!0},p(c,[a]){if(a&2){m=c[1].filter(Ue),he();for(let p=0;p<n.length;p+=1)n[p].r();n=le(n,a,b,1,c,m,f,l,pe,qe,null,Ae);for(let p=0;p<n.length;p+=1)n[p].a();me()}if(a&2){E=c[1].filter(Pe),he();for(let p=0;p<o.length;p+=1)o[p].r();o=le(o,a,v,1,c,E,r,i,pe,Ve,null,Se);for(let p=0;p<o.length;p+=1)o[p].a();me()}(!_||a&1&&u!==(u="task-section "+c[0]+" svelte-q8mvyt"))&&h(t,"class",u)},i(c){if(!_){for(let a=0;a<m.length;a+=1)U(n[a]);for(let a=0;a<E.length;a+=1)U(o[a]);_=!0}},o(c){for(let a=0;a<n.length;a+=1)P(n[a]);for(let a=0;a<o.length;a+=1)P(o[a]);_=!1},d(c){c&&g(t);for(let a=0;a<n.length;a+=1)n[a].d();for(let a=0;a<o.length;a+=1)o[a].d()}}}const Ue=s=>!s.done,Pe=s=>s.done;function tt(s,t,e){let l;se(s,B,o=>e(1,l=o));let{class:n=""}=t;const[f,i]=Qe({duration:o=>Math.sqrt(o*200),fallback(o,r){const u=getComputedStyle(o),_=u.transform==="none"?"":u.transform;return{duration:600,easing:We,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return s.$$set=o=>{"class"in o&&e(0,n=o.class)},[n,l,f,i]}class lt extends Y{constructor(t){super();Q(this,t,tt,et,ne,{class:0})}}const st=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Be(s){let t,e,l,n=s[2].text&&Le(s);return{c(){t=T("button"),n&&n.c(),this.h()},l(f){t=C(f,"BUTTON",{class:!0});var i=w(t);n&&n.l(i),i.forEach(g),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(f,i){A(f,t,i),n&&n.m(t,null),e||(l=F(t,"click",L(s[6])),e=!0)},p(f,i){f[2].text?n?n.p(f,i):(n=Le(f),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(f){f&&g(t),n&&n.d(),e=!1,l()}}}function Le(s){let t=s[2].text+"",e;return{c(){e=ae(t)},l(l){e=ie(l,t)},m(l,n){A(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&re(e,t)},d(l){l&&g(e)}}}function nt(s){let t,e,l,n,f,i=s[2]&&Be(s);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(o){t=C(o,"DIV",{class:!0});var r=w(t);e=C(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(g),this.h()},h(){h(e,"placeholder",s[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),O(t,"isError",s[5])},m(o,r){A(o,t,r),I(t,e),we(e,s[4]),i&&i.m(t,null),s[11](t),n||(f=[F(e,"input",s[9]),F(e,"input",s[7]),F(e,"keydown",s[10])],n=!0)},p(o,[r]){r&2&&h(e,"placeholder",o[1]),r&16&&e.value!==o[4]&&we(e,o[4]),o[2]?i?i.p(o,r):(i=Be(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),r&37&&O(t,"isError",o[5])},i:M,o:M,d(o){o&&g(t),i&&i.d(),s[11](null),n=!1,Ee(f)}}}function ot(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:f=null}=t,i,o,r=!1;const u=Xe(),_=()=>{o?(u("submit",{value:o}),e(4,o="")):e(5,r=!0)},m=()=>{e(5,r=!1)},b=a=>{let p=a.key;p==="Control"&&u("color"),p==="Enter"&&_()};function E(){o=this.value,e(4,o)}const v=a=>b(a);function c(a){ce[a?"unshift":"push"](()=>{i=a,e(3,i)})}return s.$$set=a=>{"class"in a&&e(0,l=a.class),"placeholder"in a&&e(1,n=a.placeholder),"btn"in a&&e(2,f=a.btn)},[l,n,f,i,o,r,_,m,b,E,v,c]}class at extends Y{constructor(t){super();Q(this,t,ot,nt,ne,{class:0,placeholder:1,btn:2})}}function Me(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function Re(s,t){let e,l,n,f,i=M,o,r,u;return{key:s,first:null,c(){e=T("button"),this.h()},l(_){e=C(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(g),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,m){A(_,e,m),o=!0,r||(u=F(e,"click",L(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,m){t=_,(!o||m&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){f=e.getBoundingClientRect()},f(){fe(e),i(),ue(e,f)},a(){i(),i=_e(e,f,ve,{})},i(_){o||(de(()=>{n||(n=Ie(e,De,{},!0)),n.run(1)}),o=!0)},o(_){n||(n=Ie(e,De,{},!1)),n.run(0),o=!1},d(_){_&&g(e),_&&n&&n.end(),r=!1,u()}}}function it(s){let t,e,l,n,f=[],i=new Map,o,r,u,_,m,b=s[3].filter(s[7]);const E=v=>v[9].id;for(let v=0;v<b.length;v+=1){let c=Me(s,b,v),a=E(c);i.set(a,f[v]=Re(a,c))}return o=new at({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),o.$on("color",s[8]),o.$on("submit",s[4]),{c(){t=T("div"),e=T("div"),l=T("span");for(let v=0;v<f.length;v+=1)f[v].c();W(o.$$.fragment),this.h()},l(v){t=C(v,"DIV",{class:!0});var c=w(t);e=C(c,"DIV",{class:!0});var a=w(e);l=C(a,"SPAN",{class:!0,style:!0}),w(l).forEach(g);for(let p=0;p<f.length;p+=1)f[p].l(a);a.forEach(g),X(o.$$.fragment,c),c.forEach(g),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",n=`color: ${s[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),O(e,"isOpen",s[2]),h(t,"class",r="add-todo "+s[0]+" svelte-1hafqlz")},m(v,c){A(v,t,c),I(t,e),I(e,l);for(let a=0;a<f.length;a+=1)f[a].m(e,null);Z(o,t,null),u=!0,_||(m=F(l,"click",L(s[6])),_=!0)},p(v,[c]){if((!u||c&2&&n!==(n=`color: ${v[1]}`))&&h(l,"style",n),c&42){b=v[3].filter(v[7]),he();for(let a=0;a<f.length;a+=1)f[a].r();f=le(f,c,E,1,v,b,i,e,pe,Re,null,Me);for(let a=0;a<f.length;a+=1)f[a].a();me()}c&4&&O(e,"isOpen",v[2]),(!u||c&1&&r!==(r="add-todo "+v[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(v){if(!u){for(let c=0;c<b.length;c+=1)U(f[c]);U(o.$$.fragment,v),u=!0}},o(v){for(let c=0;c<f.length;c+=1)P(f[c]);P(o.$$.fragment,v),u=!1},d(v){v&&g(t);for(let c=0;c<f.length;c+=1)f[c].d();G(o),_=!1,m()}}}function rt(s,t,e){let l;se(s,Oe,b=>e(3,l=b));let{class:n=""}=t,f="#0029FF",i=!1;const o=b=>{let E={id:Date.now(),text:b.detail.value,color:f,done:!1,date:st(new Date,"dot")};B.update(v=>v=[E,...v])},r=b=>b&&e(1,f=b),u=()=>e(2,i=!i),_=b=>b.color!=f,m=()=>e(2,i=!i);return s.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,f,i,l,o,r,u,_,m]}class ct extends Y{constructor(t){super();Q(this,t,rt,it,ne,{class:0})}}function ft(s){let t,e,l,n,f,i,o;return n=new ct({}),i=new lt({props:{class:"mt-50"}}),{c(){t=Ze(),e=T("section"),l=T("div"),W(n.$$.fragment),W(i.$$.fragment),this.h()},l(r){Ge('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Je(r),e=C(r,"SECTION",{class:!0});var _=w(e);l=C(_,"DIV",{class:!0});var m=w(l);X(n.$$.fragment,m),m.forEach(g),_.forEach(g),X(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",f=""+(s[0]+" mt-50 svelte-110abfo"))},m(r,u){A(r,t,u),A(r,e,u),I(e,l),Z(n,l,null),Z(i,r,u),o=!0},p(r,[u]){(!o||u&1&&f!==(f=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",f)},i(r){o||(U(n.$$.fragment,r),U(i.$$.fragment,r),o=!0)},o(r){P(n.$$.fragment,r),P(i.$$.fragment,r),o=!1},d(r){r&&g(t),r&&g(e),G(n),G(i,r)}}}function ut(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class dt extends Y{constructor(t){super();Q(this,t,ut,ft,ne,{class:0})}}export{dt as default};