import{p as M,ay as I,bB as S,bn as K,q as O,E as U,F as B,r as F,aA as N,c as w,G as H,aY as G,bC as E,s as j,aV as q,b as z,bD as J,Q,b6 as A,w as W,b4 as V,M as k,J as Y,bE as P,L as h,N as $,aK as X,bF as Z,bG as _,bH as g}from"./index-B_luA4o0.js";const ee=M({id:String,submenu:Boolean,...I(S({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:K}}),["absolute"])},"VMenu"),ne=O()({name:"VMenu",props:ee(),emits:{"update:modelValue":n=>!0},setup(n,C){let{slots:c}=C;const s=U(n,"modelValue"),{scopeId:D}=B(),{isRtl:f}=F(),d=N(),m=w(()=>n.id||`v-menu-${d}`),o=H(),a=G(E,null),v=j(new Set);q(E,{register(){v.value.add(d)},unregister(){v.value.delete(d)},closeParents(e){setTimeout(()=>{var t;!v.value.size&&!n.persistent&&(e==null||(t=o.value)!=null&&t.contentEl&&!Z(e,o.value.contentEl))&&(s.value=!1,a==null||a.closeParents())},40)}}),z(()=>{a==null||a.unregister(),document.removeEventListener("focusin",b)}),J(()=>s.value=!1);async function b(e){var u,r,i;const t=e.relatedTarget,l=e.target;await Q(),s.value&&t!==l&&((u=o.value)!=null&&u.contentEl)&&((r=o.value)!=null&&r.globalTop)&&![document,o.value.contentEl].includes(l)&&!o.value.contentEl.contains(l)&&((i=A(o.value.contentEl)[0])==null||i.focus())}W(s,e=>{e?(a==null||a.register(),V&&document.addEventListener("focusin",b,{once:!0})):(a==null||a.unregister(),V&&document.removeEventListener("focusin",b))},{immediate:!0});function p(e){a==null||a.closeParents(e)}function x(e){var t,l,u,r,i;if(!n.disabled)if(e.key==="Tab"||e.key==="Enter"&&!n.closeOnContentClick){if(e.key==="Enter"&&(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement&&e.target.closest("form")))return;e.key==="Enter"&&e.preventDefault(),_(A((t=o.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",L=>L.tabIndex>=0)||(s.value=!1,(u=(l=o.value)==null?void 0:l.activatorEl)==null||u.focus())}else n.submenu&&e.key===(f.value?"ArrowRight":"ArrowLeft")&&(s.value=!1,(i=(r=o.value)==null?void 0:r.activatorEl)==null||i.focus())}function y(e){var l;if(n.disabled)return;const t=(l=o.value)==null?void 0:l.contentEl;t&&s.value?e.key==="ArrowDown"?(e.preventDefault(),e.stopImmediatePropagation(),g(t,"next")):e.key==="ArrowUp"?(e.preventDefault(),e.stopImmediatePropagation(),g(t,"prev")):n.submenu&&(e.key===(f.value?"ArrowRight":"ArrowLeft")?s.value=!1:e.key===(f.value?"ArrowLeft":"ArrowRight")&&(e.preventDefault(),g(t,"first"))):(n.submenu?e.key===(f.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(e.key))&&(s.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>y(e))))}const R=w(()=>k({"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":m.value,onKeydown:y},n.activatorProps));return Y(()=>{const e=P.filterProps(n);return h(P,k({ref:o,id:m.value,class:["v-menu",n.class],style:n.style},e,{modelValue:s.value,"onUpdate:modelValue":t=>s.value=t,absolute:!0,activatorProps:R.value,location:n.location??(n.submenu?"end":"bottom"),"onClick:outside":p,onKeydown:x},D),{activator:c.activator,default:function(){for(var t=arguments.length,l=new Array(t),u=0;u<t;u++)l[u]=arguments[u];return h($,{root:"VMenu"},{default:()=>{var r;return[(r=c.default)==null?void 0:r.call(c,...l)]}})}})}),X({id:m,ΨopenChildren:v},o)}});export{ne as V};
