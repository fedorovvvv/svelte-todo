import{C as fe,S as F,i as C,s as S,e as v,t as M,c as g,a as k,g as q,d as h,b as m,J as x,f as y,D as E,h as J,E as w,v as j,w as A,x as L,K,L as Q,M as W,p as N,N as X,O,n as V,A as U,m as Y,P as Z,o as G,Q as _e,R as H,T as P,U as $,V as R,W as de,X as ee,Y as he,Z as me,_ as ve,j as ge,$ as ke,l as pe}from"../chunks/vendor-d493b39c.js";const te=fe([{id:1,text:"test task",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"},{id:2,text:"test task 2",done:!0,color:"#FF9900"}]);function be(r){let e,t,n,l,i,a,s,o;return{c(){e=v("div"),t=v("div"),n=v("p"),l=M(r[1]),i=v("div"),a=v("div"),this.h()},l(u){e=g(u,"DIV",{class:!0});var d=k(e);t=g(d,"DIV",{class:!0});var b=k(t);n=g(b,"P",{class:!0});var I=k(n);l=q(I,r[1]),I.forEach(h),b.forEach(h),i=g(d,"DIV",{class:!0}),k(i).forEach(h),a=g(d,"DIV",{class:!0,style:!0}),k(a).forEach(h),d.forEach(h),this.h()},h(){m(n,"class","svelte-12xyh7y"),m(t,"class","task__main svelte-12xyh7y"),m(i,"class","task__sircle svelte-12xyh7y"),m(a,"class","task__sircle task__r-t svelte-12xyh7y"),m(a,"style",s=`background-color: ${r[2]!=null?r[2]:"#0029FF"}`),m(e,"class",o="task "+r[0]+" svelte-12xyh7y"),x(e,"isDisabled",r[3])},m(u,d){y(u,e,d),E(e,t),E(t,n),E(n,l),E(e,i),E(e,a)},p(u,[d]){d&2&&J(l,u[1]),d&4&&s!==(s=`background-color: ${u[2]!=null?u[2]:"#0029FF"}`)&&m(a,"style",s),d&1&&o!==(o="task "+u[0]+" svelte-12xyh7y")&&m(e,"class",o),d&9&&x(e,"isDisabled",u[3])},i:w,o:w,d(u){u&&h(e)}}}function ye(r,e,t){let{class:n=""}=e,{text:l=""}=e,{color:i=null}=e,{disabled:a=!1}=e;return r.$$set=s=>{"class"in s&&t(0,n=s.class),"text"in s&&t(1,l=s.text),"color"in s&&t(2,i=s.color),"disabled"in s&&t(3,a=s.disabled)},[n,l,i,a]}class le extends F{constructor(e){super();C(this,e,ye,be,S,{class:0,text:1,color:2,disabled:3})}}function se(r,e,t){const n=r.slice();return n[2]=e[t],n}function ne(r,e,t){const n=r.slice();return n[2]=e[t],n}function ae(r,e){let t,n,l,i,a=w,s;return n=new le({props:{text:e[2].text,color:e[2].color?e[2].color:null}}),{key:r,first:null,c(){t=v("li"),j(n.$$.fragment),this.h()},l(o){t=g(o,"LI",{class:!0});var u=k(t);A(n.$$.fragment,u),u.forEach(h),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(o,u){y(o,t,u),L(n,t,null),s=!0},p(o,u){e=o;const d={};u&2&&(d.text=e[2].text),u&2&&(d.color=e[2].color?e[2].color:null),n.$set(d)},r(){i=t.getBoundingClientRect()},f(){K(t),a(),Q(t,i)},a(){a(),a=W(t,i,H,{duration:300})},i(o){s||(N(n.$$.fragment,o),X(()=>{l||(l=O(t,P,{},!0)),l.run(1)}),s=!0)},o(o){V(n.$$.fragment,o),l||(l=O(t,P,{},!1)),l.run(0),s=!1},d(o){o&&h(t),U(n),o&&l&&l.end()}}}function ie(r,e){let t,n,l,i,a=w,s;return n=new le({props:{text:e[2].text,color:e[2].color?e[2].color:null,disabled:!0}}),{key:r,first:null,c(){t=v("li"),j(n.$$.fragment),this.h()},l(o){t=g(o,"LI",{class:!0});var u=k(t);A(n.$$.fragment,u),u.forEach(h),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(o,u){y(o,t,u),L(n,t,null),s=!0},p(o,u){e=o;const d={};u&2&&(d.text=e[2].text),u&2&&(d.color=e[2].color?e[2].color:null),n.$set(d)},r(){i=t.getBoundingClientRect()},f(){K(t),a(),Q(t,i)},a(){a(),a=W(t,i,H,{duration:300})},i(o){s||(N(n.$$.fragment,o),X(()=>{l||(l=O(t,P,{},!0)),l.run(1)}),s=!0)},o(o){V(n.$$.fragment,o),l||(l=O(t,P,{},!1)),l.run(0),s=!1},d(o){o&&h(t),U(n),o&&l&&l.end()}}}function Ee(r){let e,t,n,l=[],i=new Map,a,s=[],o=new Map,u,d,b=r[1].filter(re);const I=f=>f[2].id;for(let f=0;f<b.length;f+=1){let c=ne(r,b,f),_=I(c);i.set(_,l[f]=ae(_,c))}let D=r[1].filter(oe);const p=f=>f[2].id;for(let f=0;f<D.length;f+=1){let c=se(r,D,f),_=p(c);o.set(_,s[f]=ie(_,c))}return{c(){e=v("section"),t=v("div"),n=v("ul");for(let f=0;f<l.length;f+=1)l[f].c();a=v("ul");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){e=g(f,"SECTION",{class:!0});var c=k(e);t=g(c,"DIV",{class:!0});var _=k(t);n=g(_,"UL",{class:!0});var z=k(n);for(let T=0;T<l.length;T+=1)l[T].l(z);z.forEach(h),a=g(_,"UL",{class:!0});var B=k(a);for(let T=0;T<s.length;T+=1)s[T].l(B);B.forEach(h),_.forEach(h),c.forEach(h),this.h()},h(){m(n,"class","task-section__col"),m(a,"class","task-section__col"),m(t,"class","container task-section__grid svelte-ezmjle"),m(e,"class",u="task-section "+r[0]+" svelte-ezmjle")},m(f,c){y(f,e,c),E(e,t),E(t,n);for(let _=0;_<l.length;_+=1)l[_].m(n,null);E(t,a);for(let _=0;_<s.length;_+=1)s[_].m(a,null);d=!0},p(f,[c]){if(c&2){b=f[1].filter(re),Y();for(let _=0;_<l.length;_+=1)l[_].r();l=Z(l,c,I,1,f,b,i,n,$,ae,null,ne);for(let _=0;_<l.length;_+=1)l[_].a();G()}if(c&2){D=f[1].filter(oe),Y();for(let _=0;_<s.length;_+=1)s[_].r();s=Z(s,c,p,1,f,D,o,a,$,ie,null,se);for(let _=0;_<s.length;_+=1)s[_].a();G()}(!d||c&1&&u!==(u="task-section "+f[0]+" svelte-ezmjle"))&&m(e,"class",u)},i(f){if(!d){for(let c=0;c<b.length;c+=1)N(l[c]);for(let c=0;c<D.length;c+=1)N(s[c]);d=!0}},o(f){for(let c=0;c<l.length;c+=1)V(l[c]);for(let c=0;c<s.length;c+=1)V(s[c]);d=!1},d(f){f&&h(e);for(let c=0;c<l.length;c+=1)l[c].d();for(let c=0;c<s.length;c+=1)s[c].d()}}}const re=r=>!r.done,oe=r=>r.done;function Ie(r,e,t){let n;_e(r,te,i=>t(1,n=i));let{class:l=""}=e;return r.$$set=i=>{"class"in i&&t(0,l=i.class)},[l,n]}class De extends F{constructor(e){super();C(this,e,Ie,Ee,S,{class:0})}}function ce(r){let e,t,n,l=r[2].text&&ue(r);return{c(){e=v("button"),l&&l.c(),this.h()},l(i){e=g(i,"BUTTON",{class:!0});var a=k(e);l&&l.l(a),a.forEach(h),this.h()},h(){m(e,"class","btn svelte-lxnxhr")},m(i,a){y(i,e,a),l&&l.m(e,null),t||(n=R(e,"click",de(r[6])),t=!0)},p(i,a){i[2].text?l?l.p(i,a):(l=ue(i),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(i){i&&h(e),l&&l.d(),t=!1,n()}}}function ue(r){let e=r[2].text+"",t;return{c(){t=M(e)},l(n){t=q(n,e)},m(n,l){y(n,t,l)},p(n,l){l&4&&e!==(e=n[2].text+"")&&J(t,e)},d(n){n&&h(t)}}}function Te(r){let e,t,n,l,i,a=r[2]&&ce(r);return{c(){e=v("div"),t=v("input"),a&&a.c(),this.h()},l(s){e=g(s,"DIV",{class:!0});var o=k(e);t=g(o,"INPUT",{placeholder:!0,class:!0}),a&&a.l(o),o.forEach(h),this.h()},h(){m(t,"placeholder",r[1]),m(t,"class","svelte-lxnxhr"),m(e,"class",n="input-group "+r[0]+" "+(r[2]?"input-group_btn":"")+" svelte-lxnxhr"),x(e,"isError",r[5])},m(s,o){y(s,e,o),E(e,t),ee(t,r[4]),a&&a.m(e,null),r[9](e),l||(i=[R(t,"input",r[8]),R(t,"input",r[7])],l=!0)},p(s,[o]){o&2&&m(t,"placeholder",s[1]),o&16&&t.value!==s[4]&&ee(t,s[4]),s[2]?a?a.p(s,o):(a=ce(s),a.c(),a.m(e,null)):a&&(a.d(1),a=null),o&5&&n!==(n="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-lxnxhr")&&m(e,"class",n),o&37&&x(e,"isError",s[5])},i:w,o:w,d(s){s&&h(e),a&&a.d(),r[9](null),l=!1,he(i)}}}function we(r,e,t){let{class:n=""}=e,{placeholder:l="Placeholer"}=e,{btn:i=null}=e,a,s,o=!1;const u=me(),d=()=>{s?(u("submit",{value:s}),t(4,s="")):t(5,o=!0)},b=()=>{t(5,o=!1)};function I(){s=this.value,t(4,s)}function D(p){ve[p?"unshift":"push"](()=>{a=p,t(3,a)})}return r.$$set=p=>{"class"in p&&t(0,n=p.class),"placeholder"in p&&t(1,l=p.placeholder),"btn"in p&&t(2,i=p.btn)},[n,l,i,a,s,o,d,b,I,D]}class Ne extends F{constructor(e){super();C(this,e,we,Te,S,{class:0,placeholder:1,btn:2})}}function Ve(r){let e,t,n,l;return t=new Ne({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",r[1]),{c(){e=v("div"),j(t.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var a=k(e);A(t.$$.fragment,a),a.forEach(h),this.h()},h(){m(e,"class",n="add-todo "+r[0]+" svelte-xriol")},m(i,a){y(i,e,a),L(t,e,null),l=!0},p(i,[a]){(!l||a&1&&n!==(n="add-todo "+i[0]+" svelte-xriol"))&&m(e,"class",n)},i(i){l||(N(t.$$.fragment,i),l=!0)},o(i){V(t.$$.fragment,i),l=!1},d(i){i&&h(e),U(t)}}}function Fe(r,e,t){let{class:n}=e;const l=i=>{let a={id:Date.now(),text:i.detail.value,color:null,done:!1};te.update(s=>s=[a,...s]),console.log(a)};return r.$$set=i=>{"class"in i&&t(0,n=i.class)},[n,l]}class Ce extends F{constructor(e){super();C(this,e,Fe,Ve,S,{class:0})}}function Se(r){let e,t,n,l,i,a;return l=new Ce({}),i=new De({props:{class:"mt-50"}}),{c(){e=ge(),t=v("section"),n=v("div"),j(l.$$.fragment),j(i.$$.fragment),this.h()},l(s){ke('[data-svelte="svelte-8twn25"]',document.head).forEach(h),e=pe(s),t=g(s,"SECTION",{class:!0});var u=k(t);n=g(u,"DIV",{class:!0});var d=k(n);A(l.$$.fragment,d),d.forEach(h),u.forEach(h),A(i.$$.fragment,s),this.h()},h(){document.title="ToDo",m(n,"class","container"),m(t,"class","mt-50")},m(s,o){y(s,e,o),y(s,t,o),E(t,n),L(l,n,null),L(i,s,o),a=!0},p:w,i(s){a||(N(l.$$.fragment,s),N(i.$$.fragment,s),a=!0)},o(s){V(l.$$.fragment,s),V(i.$$.fragment,s),a=!1},d(s){s&&h(e),s&&h(t),U(l),U(i,s)}}}class Ae extends F{constructor(e){super();C(this,e,null,Se,S,{})}}export{Ae as default};