import{K as He,C as Ke,S as K,i as Y,L as Ye,e as T,c as C,a as w,d as k,b as h,f as S,D as I,M as A,N as R,O as ke,t as pe,g as be,P as O,h as Ee,Q as x,R as Qe,E as j,T as ye,U as ee,V as oe,s as te,v as Q,w as W,x as X,W as ae,X as ie,Y as re,p as U,Z as ce,_ as Te,n as V,$ as Ce,A as Z,m as fe,o as ue,a0 as We,a1 as _e,a2 as de,a3 as Xe,a4 as we,a5 as Ze,a6 as Ie,a7 as Oe,j as Ge,a8 as Je,l as $e}from"../chunks/vendor-8ffd20c8.js";const H=Ke([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),ze=He(H,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(o=>o.color).map(o=>o.color).concat(e),i=n.filter((o,r)=>n.indexOf(o)===r).map((o,r)=>({id:r,color:o}));t(i)}),xe=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function et(s){const t=window.getSelection(),e=t.focusOffset,l=t.getRangeAt(0).commonAncestorContainer.parentNode;return console.log(t),console.log(l),{pos:e,node:l}}function De(s,t,e){const l=s.slice();return l[30]=t[e],l}function Ne(s,t){let e,l,n,c,i;return{key:s,first:null,c(){e=T("li"),l=T("button"),this.h()},l(o){e=C(o,"LI",{class:!0});var r=w(e);l=C(r,"BUTTON",{class:!0,style:!0}),w(l).forEach(k),r.forEach(k),this.h()},h(){h(l,"class","task__color-btn svelte-11gvzec"),h(l,"style",n=`background-color: ${t[30].color}`),h(e,"class","task__color-item svelte-11gvzec"),this.first=e},m(o,r){S(o,e,r),I(e,l),c||(i=A(l,"click",R(function(){ke(t[14](t[30].color))&&t[14](t[30].color).apply(this,arguments)})),c=!0)},p(o,r){t=o,r[0]&1028&&n!==(n=`background-color: ${t[30].color}`)&&h(l,"style",n)},d(o){o&&k(e),c=!1,i()}}}function tt(s){let t,e,l,n,c=`${s[1]}`,i,o,r,u,_,g,b,y,v,a,f=[],m=new Map,q,D,N,M,P,G,B=s[10].filter(s[23]);const J=p=>p[30].id;for(let p=0;p<B.length;p+=1){let E=De(s,B,p),F=J(E);m.set(F,f[p]=Ne(F,E))}return{c(){t=T("article"),e=T("div"),l=T("div"),n=T("p"),i=T("div"),o=T("div"),r=T("span"),u=pe(s[4]),_=T("div"),g=T("button"),b=T("span"),y=T("button"),v=T("span"),a=T("ul");for(let p=0;p<f.length;p+=1)f[p].c();D=T("button"),N=T("span"),this.h()},l(p){t=C(p,"ARTICLE",{class:!0});var E=w(t);e=C(E,"DIV",{class:!0});var F=w(e);l=C(F,"DIV",{class:!0});var $=w(l);n=C($,"P",{class:!0,contenteditable:!0});var le=w(n);le.forEach(k),$.forEach(k),i=C(F,"DIV",{class:!0});var d=w(i);o=C(d,"DIV",{class:!0});var z=w(o);r=C(z,"SPAN",{class:!0});var L=w(r);u=be(L,s[4]),L.forEach(k),z.forEach(k),d.forEach(k),F.forEach(k),_=C(E,"DIV",{class:!0});var se=w(_);g=C(se,"BUTTON",{class:!0});var he=w(g);b=C(he,"SPAN",{class:!0}),w(b).forEach(k),he.forEach(k),y=C(se,"BUTTON",{class:!0});var ge=w(y);v=C(ge,"SPAN",{class:!0}),w(v).forEach(k),ge.forEach(k),se.forEach(k),a=C(E,"UL",{class:!0,style:!0});var ve=w(a);for(let ne=0;ne<f.length;ne+=1)f[ne].l(ve);ve.forEach(k),D=C(E,"BUTTON",{class:!0});var me=w(D);N=C(me,"SPAN",{class:!0}),w(N).forEach(k),me.forEach(k),E.forEach(k),this.h()},h(){h(n,"class","task__main-content svelte-11gvzec"),h(n,"contenteditable",s[7]),h(l,"class","task__main-container svelte-11gvzec"),h(r,"class","svelte-11gvzec"),h(o,"class","task__info-content svelte-11gvzec"),h(i,"class","task__info svelte-11gvzec"),h(e,"class","task__main svelte-11gvzec"),O(e,"isEdit",s[7]),h(b,"class","svg-image-del svelte-11gvzec"),h(g,"class","task__menu-btn task__menu-btn_del svelte-11gvzec"),h(v,"class","svg-image-pen svelte-11gvzec"),h(y,"class","task__menu-btn task__menu-btn_edit svelte-11gvzec"),O(y,"isSelect",s[7]),O(y,"isChanged",s[8]),O(y,"isSave",st),h(_,"class","task__circle task__menu svelte-11gvzec"),O(_,"isOpen",s[7]),h(a,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-11gvzec"),h(a,"style",q=`background-color: ${s[2]}`),O(a,"isOpen",s[7]),h(N,"class","svelte-11gvzec"),h(D,"class","task__info-open svelte-11gvzec"),O(D,"isHidden",s[7]),h(t,"class",M="task "+s[0]+" svelte-11gvzec"),O(t,"isDisabled",s[3]),O(t,"isInfoOpen",s[5]),O(t,"isEdit",s[7])},m(p,E){S(p,t,E),I(t,e),I(e,l),I(l,n),n.innerHTML=c,s[19](n),I(e,i),I(i,o),I(o,r),I(r,u),s[21](i),I(t,_),I(_,g),I(g,b),I(_,y),I(y,v),I(t,a);for(let F=0;F<f.length;F+=1)f[F].m(a,null);I(t,D),I(D,N),P||(G=[A(n,"input",s[20]),A(n,"keydown",s[16]),A(e,"click",s[11]),A(g,"click",R(s[12])),A(y,"click",R(s[22])),A(D,"click",R(s[24]))],P=!0)},p(p,E){E[0]&2&&c!==(c=`${p[1]}`)&&(n.innerHTML=c),E[0]&128&&h(n,"contenteditable",p[7]),E[0]&16&&Ee(u,p[4]),E[0]&128&&O(e,"isEdit",p[7]),E[0]&128&&O(y,"isSelect",p[7]),E[0]&256&&O(y,"isChanged",p[8]),E[0]&128&&O(_,"isOpen",p[7]),E[0]&17412&&(B=p[10].filter(p[23]),f=x(f,E,J,1,p,B,m,a,Qe,Ne,null,De)),E[0]&4&&q!==(q=`background-color: ${p[2]}`)&&h(a,"style",q),E[0]&128&&O(a,"isOpen",p[7]),E[0]&128&&O(D,"isHidden",p[7]),E[0]&1&&M!==(M="task "+p[0]+" svelte-11gvzec")&&h(t,"class",M),E[0]&9&&O(t,"isDisabled",p[3]),E[0]&33&&O(t,"isInfoOpen",p[5]),E[0]&129&&O(t,"isEdit",p[7])},i:j,o:j,d(p){p&&k(t),s[19](null),s[21](null);for(let E=0;E<f.length;E+=1)f[E].d();P=!1,ye(G)}}}let Ae=new Set;function lt(){Ae.forEach(s=>{s.edit(!1)})}let st=!1;function nt(s,t,e){let l,n;ee(s,H,d=>e(26,l=d)),ee(s,ze,d=>e(10,n=d));let{class:c=""}=t,{text:i=""}=t,{color:o="#0029FF"}=t,{disabled:r=!1}=t,{id:u=null}=t,{date:_=""}=t,g=!1,b,y=!1,v=!1,a,f;const m=()=>{if(y===!1){let d=l.map(z=>(u===z.id&&(z.done=!z.done),z));H.set(d)}},q=()=>{let d=l.filter(z=>z.id!=u);H.set(d)};function D(d){e(7,y=d!=null?d:!y),y===!1&&P()}const N=d=>{let z=l.map(L=>(u===L.id&&(L.color=d),L));H.set(z)};function M(d){e(5,g=d!=null?d:!g);let z=0;b.childNodes.forEach(L=>z+=L.clientHeight),b.style.setProperty("--taskInfoHeight",`${g?z:0}px`)}function P(){if(v){let{pos:d,node:z}=et();console.log(d)}}function G(d){let z=d.ctrlKey?!1:d.metaKey,L=d.keyCode;if(z&&L===83)return d.preventDefault(),P(),!1;clearTimeout(f),f=setTimeout(()=>P(),1e3)}function B(d=(z=>(z=a.innerHTML)!=null?z:i)()){return e(8,v=d!==i)}Ae.add({save(){P()},edit(d){D(d)}});function J(d){oe[d?"unshift":"push"](()=>{a=d,e(9,a)})}const p=()=>B();function E(d){oe[d?"unshift":"push"](()=>{b=d,e(6,b)})}const F=()=>{y===!1&&lt(),D()},$=d=>d.color!=o,le=()=>M();return s.$$set=d=>{"class"in d&&e(0,c=d.class),"text"in d&&e(1,i=d.text),"color"in d&&e(2,o=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(18,u=d.id),"date"in d&&e(4,_=d.date)},[c,i,o,r,_,g,b,y,v,a,n,m,q,D,N,M,G,B,u,J,p,E,F,$,le]}class Fe extends K{constructor(t){super();Y(this,t,nt,tt,Ye,{class:0,text:1,color:2,disabled:3,id:18,date:4},null,[-1,-1])}}function Se(s,t,e){const l=s.slice();return l[4]=t[e],l}function qe(s,t,e){const l=s.slice();return l[4]=t[e],l}function Le(s,t){let e,l,n,c,i,o=j,r;return l=new Fe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=T("li"),Q(l.$$.fragment),this.h()},l(u){e=C(u,"LI",{class:!0});var _=w(e);W(l.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(u,_){S(u,e,_),X(l,e,null),r=!0},p(u,_){t=u;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),l.$set(g)},r(){i=e.getBoundingClientRect()},f(){ae(e),o(),ie(e,i)},a(){o(),o=re(e,i,_e,{duration:300})},i(u){r||(U(l.$$.fragment,u),ce(()=>{c&&c.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){V(l.$$.fragment,u),n&&n.invalidate(),c=Ce(e,t[2],{key:t[4].id}),r=!1},d(u){u&&k(e),Z(l),u&&c&&c.end()}}}function Pe(s,t){let e,l,n,c,i,o=j,r;return l=new Fe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=T("li"),Q(l.$$.fragment),this.h()},l(u){e=C(u,"LI",{class:!0});var _=w(e);W(l.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(u,_){S(u,e,_),X(l,e,null),r=!0},p(u,_){t=u;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),l.$set(g)},r(){i=e.getBoundingClientRect()},f(){ae(e),o(),ie(e,i)},a(){o(),o=re(e,i,_e,{duration:300})},i(u){r||(U(l.$$.fragment,u),ce(()=>{c&&c.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){V(l.$$.fragment,u),n&&n.invalidate(),c=Ce(e,t[2],{key:t[4].id}),r=!1},d(u){u&&k(e),Z(l),u&&c&&c.end()}}}function ot(s){let t,e,l,n=[],c=new Map,i,o=[],r=new Map,u,_,g=s[1].filter(Ue);const b=a=>a[4].id;for(let a=0;a<g.length;a+=1){let f=qe(s,g,a),m=b(f);c.set(m,n[a]=Le(m,f))}let y=s[1].filter(Ve);const v=a=>a[4].id;for(let a=0;a<y.length;a+=1){let f=Se(s,y,a),m=v(f);r.set(m,o[a]=Pe(m,f))}return{c(){t=T("section"),e=T("div"),l=T("ul");for(let a=0;a<n.length;a+=1)n[a].c();i=T("ul");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){t=C(a,"SECTION",{class:!0});var f=w(t);e=C(f,"DIV",{class:!0});var m=w(e);l=C(m,"UL",{class:!0});var q=w(l);for(let N=0;N<n.length;N+=1)n[N].l(q);q.forEach(k),i=C(m,"UL",{class:!0});var D=w(i);for(let N=0;N<o.length;N+=1)o[N].l(D);D.forEach(k),m.forEach(k),f.forEach(k),this.h()},h(){h(l,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-te6j4q"),h(t,"class",u="task-section "+s[0]+" svelte-te6j4q")},m(a,f){S(a,t,f),I(t,e),I(e,l);for(let m=0;m<n.length;m+=1)n[m].m(l,null);I(e,i);for(let m=0;m<o.length;m+=1)o[m].m(i,null);_=!0},p(a,[f]){if(f&2){g=a[1].filter(Ue),fe();for(let m=0;m<n.length;m+=1)n[m].r();n=x(n,f,b,1,a,g,c,l,de,Le,null,qe);for(let m=0;m<n.length;m+=1)n[m].a();ue()}if(f&2){y=a[1].filter(Ve),fe();for(let m=0;m<o.length;m+=1)o[m].r();o=x(o,f,v,1,a,y,r,i,de,Pe,null,Se);for(let m=0;m<o.length;m+=1)o[m].a();ue()}(!_||f&1&&u!==(u="task-section "+a[0]+" svelte-te6j4q"))&&h(t,"class",u)},i(a){if(!_){for(let f=0;f<g.length;f+=1)U(n[f]);for(let f=0;f<y.length;f+=1)U(o[f]);_=!0}},o(a){for(let f=0;f<n.length;f+=1)V(n[f]);for(let f=0;f<o.length;f+=1)V(o[f]);_=!1},d(a){a&&k(t);for(let f=0;f<n.length;f+=1)n[f].d();for(let f=0;f<o.length;f+=1)o[f].d()}}}const Ue=s=>!s.done,Ve=s=>s.done;function at(s,t,e){let l;ee(s,H,o=>e(1,l=o));let{class:n=""}=t;const[c,i]=We({duration:o=>Math.sqrt(o*200),fallback(o,r){const u=getComputedStyle(o),_=u.transform==="none"?"":u.transform;return{duration:600,easing:Xe,css:g=>`
					transform: ${_} scale(${g});
					opacity: ${g}
				`}}});return s.$$set=o=>{"class"in o&&e(0,n=o.class)},[n,l,c,i]}class it extends K{constructor(t){super();Y(this,t,at,ot,te,{class:0})}}function Me(s){let t,e,l,n=s[2].text&&Be(s);return{c(){t=T("button"),n&&n.c(),this.h()},l(c){t=C(c,"BUTTON",{class:!0});var i=w(t);n&&n.l(i),i.forEach(k),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(c,i){S(c,t,i),n&&n.m(t,null),e||(l=A(t,"click",R(s[6])),e=!0)},p(c,i){c[2].text?n?n.p(c,i):(n=Be(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&k(t),n&&n.d(),e=!1,l()}}}function Be(s){let t=s[2].text+"",e;return{c(){e=pe(t)},l(l){e=be(l,t)},m(l,n){S(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&Ee(e,t)},d(l){l&&k(e)}}}function rt(s){let t,e,l,n,c,i=s[2]&&Me(s);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(o){t=C(o,"DIV",{class:!0});var r=w(t);e=C(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){h(e,"placeholder",s[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),O(t,"isError",s[5])},m(o,r){S(o,t,r),I(t,e),we(e,s[4]),i&&i.m(t,null),s[10](t),n||(c=[A(e,"input",s[9]),A(e,"input",s[7]),A(e,"keydown",s[8])],n=!0)},p(o,[r]){r&2&&h(e,"placeholder",o[1]),r&16&&e.value!==o[4]&&we(e,o[4]),o[2]?i?i.p(o,r):(i=Me(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),r&37&&O(t,"isError",o[5])},i:j,o:j,d(o){o&&k(t),i&&i.d(),s[10](null),n=!1,ye(c)}}}function ct(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,i,o,r=!1;const u=Ze(),_=()=>{o?(u("submit",{value:o}),e(4,o="")):e(5,r=!0)},g=()=>{e(5,r=!1)},b=a=>{let f=a.key,m=a.ctrlKey,q=a.shiftKey;a.keyCode,m&&q&&u("color"),f==="Enter"&&_()};function y(){o=this.value,e(4,o)}function v(a){oe[a?"unshift":"push"](()=>{i=a,e(3,i)})}return s.$$set=a=>{"class"in a&&e(0,l=a.class),"placeholder"in a&&e(1,n=a.placeholder),"btn"in a&&e(2,c=a.btn)},[l,n,c,i,o,r,_,g,b,y,v]}class ft extends K{constructor(t){super();Y(this,t,ct,rt,te,{class:0,placeholder:1,btn:2})}}function Re(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function je(s,t){let e,l,n,c,i=j,o,r,u;return{key:s,first:null,c(){e=T("button"),this.h()},l(_){e=C(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(k),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,g){S(_,e,g),o=!0,r||(u=A(e,"click",R(function(){ke(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,g){t=_,(!o||g&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){c=e.getBoundingClientRect()},f(){ae(e),i(),ie(e,c)},a(){i(),i=re(e,c,_e,{})},i(_){o||(ce(()=>{n||(n=Ie(e,Oe,{},!0)),n.run(1)}),o=!0)},o(_){n||(n=Ie(e,Oe,{},!1)),n.run(0),o=!1},d(_){_&&k(e),_&&n&&n.end(),r=!1,u()}}}function ut(s){let t,e,l,n,c=[],i=new Map,o,r,u,_,g,b=s[3].filter(s[7]);const y=v=>v[9].id;for(let v=0;v<b.length;v+=1){let a=Re(s,b,v),f=y(a);i.set(f,c[v]=je(f,a))}return o=new ft({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),o.$on("color",s[8]),o.$on("submit",s[4]),{c(){t=T("div"),e=T("div"),l=T("span");for(let v=0;v<c.length;v+=1)c[v].c();Q(o.$$.fragment),this.h()},l(v){t=C(v,"DIV",{class:!0});var a=w(t);e=C(a,"DIV",{class:!0});var f=w(e);l=C(f,"SPAN",{class:!0,style:!0}),w(l).forEach(k);for(let m=0;m<c.length;m+=1)c[m].l(f);f.forEach(k),W(o.$$.fragment,a),a.forEach(k),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",n=`color: ${s[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),O(e,"isOpen",s[2]),h(t,"class",r="add-todo "+s[0]+" svelte-1hafqlz")},m(v,a){S(v,t,a),I(t,e),I(e,l);for(let f=0;f<c.length;f+=1)c[f].m(e,null);X(o,t,null),u=!0,_||(g=A(l,"click",R(s[6])),_=!0)},p(v,[a]){if((!u||a&2&&n!==(n=`color: ${v[1]}`))&&h(l,"style",n),a&42){b=v[3].filter(v[7]),fe();for(let f=0;f<c.length;f+=1)c[f].r();c=x(c,a,y,1,v,b,i,e,de,je,null,Re);for(let f=0;f<c.length;f+=1)c[f].a();ue()}a&4&&O(e,"isOpen",v[2]),(!u||a&1&&r!==(r="add-todo "+v[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(v){if(!u){for(let a=0;a<b.length;a+=1)U(c[a]);U(o.$$.fragment,v),u=!0}},o(v){for(let a=0;a<c.length;a+=1)V(c[a]);V(o.$$.fragment,v),u=!1},d(v){v&&k(t);for(let a=0;a<c.length;a+=1)c[a].d();Z(o),_=!1,g()}}}function _t(s,t,e){let l;ee(s,ze,b=>e(3,l=b));let{class:n=""}=t,c="#0029FF",i=!1;const o=b=>{let y={id:Date.now(),text:b.detail.value,color:c,done:!1,date:xe(new Date,"dot")};H.update(v=>v=[y,...v])},r=b=>b&&e(1,c=b),u=()=>e(2,i=!i),_=b=>b.color!=c,g=()=>e(2,i=!i);return s.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,c,i,l,o,r,u,_,g]}class dt extends K{constructor(t){super();Y(this,t,_t,ut,te,{class:0})}}function ht(s){let t,e,l,n,c,i,o;return n=new dt({}),i=new it({props:{class:"mt-50"}}),{c(){t=Ge(),e=T("section"),l=T("div"),Q(n.$$.fragment),Q(i.$$.fragment),this.h()},l(r){Je('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=$e(r),e=C(r,"SECTION",{class:!0});var _=w(e);l=C(_,"DIV",{class:!0});var g=w(l);W(n.$$.fragment,g),g.forEach(k),_.forEach(k),W(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",c=""+(s[0]+" mt-50 svelte-110abfo"))},m(r,u){S(r,t,u),S(r,e,u),I(e,l),X(n,l,null),X(i,r,u),o=!0},p(r,[u]){(!o||u&1&&c!==(c=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",c)},i(r){o||(U(n.$$.fragment,r),U(i.$$.fragment,r),o=!0)},o(r){V(n.$$.fragment,r),V(i.$$.fragment,r),o=!1},d(r){r&&k(t),r&&k(e),Z(n),Z(i,r)}}}function gt(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class mt extends K{constructor(t){super();Y(this,t,gt,ht,te,{class:0})}}export{mt as default};