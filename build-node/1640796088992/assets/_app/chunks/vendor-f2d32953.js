function _(){}function O(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function M(){return Object.create(null)}function m(t){t.forEach(q)}function F(t){return typeof t=="function"}function H(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function P(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e){t.$$.on_destroy.push(P(n,e))}function lt(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?O(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(n.dirty.length,r.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,l){if(r){const o=L(n,e,i,l);t.p(o,r)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let x=!1;function G(){x=!0}function J(){x=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:K(1,r,g=>n[e[g]].claim_order,s))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],o=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);u>=c;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<o.length;c++){for(;s<l.length&&o[c].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[c],a)}}function R(t,n){if(x){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){x&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function W(t){t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function mt(){return k(" ")}function pt(){return k("")}function yt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function gt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,r=!1){X(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Y(t,n,e,i){return T(t,r=>r.nodeName===n,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(n))}function xt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function $t(t){return Z(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function wt(t,n){t.value=n==null?"":n}function vt(t,n,e){t.classList[e?"add":"remove"](n)}function tt(t,n,e=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e,!1,n),i}function kt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function y(t){p=t}function $(){if(!p)throw new Error("Function called outside component initialization");return p}function At(t){$().$$.on_mount.push(t)}function St(t){$().$$.after_update.push(t)}function jt(){const t=$();return(n,e)=>{const i=t.$$.callbacks[n];if(i){const r=tt(n,e);i.slice().forEach(l=>{l.call(t,r)})}}}function Nt(t,n){$().$$.context.set(t,n)}const b=[],z=[],E=[],B=[],nt=Promise.resolve();let A=!1;function et(){A||(A=!0,nt.then(D))}function S(t){E.push(t)}const j=new Set;let w=0;function D(){const t=p;do{for(;w<b.length;){const n=b[w];w++,y(n),it(n.$$)}for(y(null),b.length=0,w=0;z.length;)z.pop()();for(let n=0;n<E.length;n+=1){const e=E[n];j.has(e)||(j.add(e),e())}E.length=0}while(b.length);for(;B.length;)B.pop()();A=!1,j.clear(),y(t)}function it(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const v=new Set;let d;function Ct(){d={r:0,c:[],p:d}}function qt(){d.r||m(d.c),d=d.p}function rt(t,n){t&&t.i&&(v.delete(t),t.i(n))}function Mt(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),d.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Lt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const c in o)c in u||(i[c]=1);for(const c in u)r[c]||(e[c]=u[c],r[c]=1);t[l]=u}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Tt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,on_mount:l,on_destroy:o,after_update:u}=t.$$;r&&r.m(n,e),i||S(()=>{const c=l.map(q).filter(F);o?o.push(...c):m(c),t.$$.on_mount=[]}),u.forEach(S)}function ot(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(b.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Dt(t,n,e,i,r,l,o,u=[-1]){const c=p;y(t);const s=t.$$={fragment:null,ctx:null,props:l,update:_,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...N)=>{const C=N.length?N[0]:g;return s.ctx&&r(s.ctx[f],s.ctx[f]=C)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](C),a&&ut(t,f)),g}):[],s.update(),a=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){G();const f=V(n.target);s.fragment&&s.fragment.l(f),f.forEach(W)}else s.fragment&&s.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),J(),D()}y(c)}class Ot{$destroy(){ot(this,1),this.$destroy=_}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function Ft(t,n=_){let e;const i=new Set;function r(u){if(H(t,u)&&(t=u,e)){const c=!h.length;for(const s of i)s[1](),h.push(s,t);if(c){for(let s=0;s<h.length;s+=2)h[s][0](h[s+1]);h.length=0}}}function l(u){r(u(t))}function o(u,c=_){const s=[u,c];return i.add(s),i.size===1&&(e=n(r)||_),u(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:r,update:l,subscribe:o}}export{ot as A,O as B,Ft as C,R as D,_ as E,lt as F,at as G,dt as H,ft as I,ht as J,st as K,yt as L,bt as M,vt as N,wt as O,m as P,jt as Q,z as R,Ot as S,kt as T,V as a,gt as b,xt as c,W as d,U as e,_t as f,Z as g,Et as h,Dt as i,mt as j,pt as k,$t as l,Ct as m,Mt as n,qt as o,rt as p,Nt as q,St as r,H as s,k as t,At as u,zt as v,Bt as w,ct as x,Lt as y,Tt as z};