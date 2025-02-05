import{p as ue,av as se,aw as ye,q as ie,E as de,ax as ce,ay as xe,c as $,J as me,az as ve,aA as _,L as t,M as E,aB as be,aC as he,G as V,s as ke,d as we,o as Ce,w as N,b as Pe,aD as Fe,aE as Se,O as j,aa as te,aF as Ae,aG as Re,aH as $e,aI as Ie,Q,aJ as Me,a as Be,a0 as De,R as Ue,ad as Te,aK as qe,U as Ne,Y as le,W as ze,X as s,au as Ee,ai as S,af as L,ag as R,ah as He,as as W,V as Ge,$ as Oe,aj as Le,Z as d,aL as je,ar as _e,ao as Je,aq as Ke,aM as Qe,aN as We,ak as Xe,ac as Ye}from"./index-B1aakBra.js";import{c as Ze,a as X,b as ea,d as aa,u as ta,e as z,V as la}from"./index.esm-c0WZ9xI1.js";import{a as oa,V as oe,b as re}from"./route-block-m18Oa0ds.js";import{V as ra}from"./VDivider-DVKlTu_6.js";import{m as na,a as ne,V as ua,b as sa}from"./VDataTable-CpMjhnb0.js";import{V as ia}from"./VToolbar-GHq39cnw.js";import{V as da}from"./VContainer-CzdA3Bnu.js";import"./VPagination-CwlMFSTT.js";import"./VList-FdSFdA7O.js";import"./ssrBoot-C9Msaj6g.js";const ca=ue({...se(),...ye(na(),["inline"])},"VCheckbox"),ma=ie()({name:"VCheckbox",inheritAttrs:!1,props:ca(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,n){let{attrs:y,slots:p}=n;const i=de(e,"modelValue"),{isFocused:c,focus:x,blur:I}=ce(e),m=xe(),M=$(()=>e.id||`checkbox-${m}`);return me(()=>{const[B,U]=ve(y),D=_.filterProps(e),b=ne.filterProps(e);return t(_,E({class:["v-checkbox",e.class]},B,D,{modelValue:i.value,"onUpdate:modelValue":k=>i.value=k,id:M.value,focused:c.value,style:e.style}),{...p,default:k=>{let{id:f,messagesId:w,isDisabled:g,isReadonly:C,isValid:P}=k;return t(ne,E(b,{id:f.value,"aria-describedby":w.value,disabled:g.value,readonly:C.value},U,{error:P.value===!1,modelValue:i.value,"onUpdate:modelValue":T=>i.value=T,onFocus:x,onBlur:I}),p)}})}),{}}}),va=ue({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...se(),...be()},"VTextarea"),fa=ie()({name:"VTextarea",directives:{Intersect:he},inheritAttrs:!1,props:va(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:y,emit:p,slots:i}=n;const c=de(e,"modelValue"),{isFocused:x,focus:I,blur:m}=ce(e),M=$(()=>typeof e.counterValue=="function"?e.counterValue(c.value):(c.value||"").toString().length),B=$(()=>{if(y.maxlength)return y.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function U(r,a){var u,h;!e.autofocus||!r||(h=(u=a[0].target)==null?void 0:u.focus)==null||h.call(u)}const D=V(),b=V(),k=ke(""),f=V(),w=$(()=>e.persistentPlaceholder||x.value||e.active);function g(){var r;f.value!==document.activeElement&&((r=f.value)==null||r.focus()),x.value||I()}function C(r){g(),p("click:control",r)}function P(r){p("mousedown:control",r)}function T(r){r.stopPropagation(),g(),Q(()=>{c.value="",Me(e["onClick:clear"],r)})}function H(r){var u;const a=r.target;if(c.value=a.value,(u=e.modelModifiers)!=null&&u.trim){const h=[a.selectionStart,a.selectionEnd];Q(()=>{a.selectionStart=h[0],a.selectionEnd=h[1]})}}const v=V(),A=V(+e.rows),q=$(()=>["plain","underlined"].includes(e.variant));we(()=>{e.autoGrow||(A.value=+e.rows)});function l(){e.autoGrow&&Q(()=>{if(!v.value||!b.value)return;const r=getComputedStyle(v.value),a=getComputedStyle(b.value.$el),u=parseFloat(r.getPropertyValue("--v-field-padding-top"))+parseFloat(r.getPropertyValue("--v-input-padding-top"))+parseFloat(r.getPropertyValue("--v-field-padding-bottom")),h=v.value.scrollHeight,G=parseFloat(r.lineHeight),J=Math.max(parseFloat(e.rows)*G+u,parseFloat(a.getPropertyValue("--v-input-control-height"))),K=parseFloat(e.maxRows)*G+u||1/0,F=De(h??0,J,K);A.value=Math.floor((F-u)/G),k.value=Be(F)})}Ce(l),N(c,l),N(()=>e.rows,l),N(()=>e.maxRows,l),N(()=>e.density,l);let o;return N(v,r=>{r?(o=new ResizeObserver(l),o.observe(v.value)):o==null||o.disconnect()}),Pe(()=>{o==null||o.disconnect()}),me(()=>{const r=!!(i.counter||e.counter||e.counterValue),a=!!(r||i.details),[u,h]=ve(y),{modelValue:G,...J}=_.filterProps(e),K=Fe(e);return t(_,E({ref:D,modelValue:c.value,"onUpdate:modelValue":F=>c.value=F,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":q.value},e.class],style:e.style},u,J,{centerAffix:A.value===1&&!q.value,focused:x.value}),{...i,default:F=>{let{id:O,isDisabled:Y,isDirty:Z,isReadonly:fe,isValid:pe}=F;return t(Se,E({ref:b,style:{"--v-textarea-control-height":k.value},onClick:C,onMousedown:P,"onClick:clear":T,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},K,{id:O.value,active:w.value||Z.value,centerAffix:A.value===1&&!q.value,dirty:Z.value||e.dirty,disabled:Y.value,focused:x.value,error:pe.value===!1}),{...i,default:ge=>{let{props:{class:ee,...ae}}=ge;return t(j,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),te(t("textarea",E({ref:f,class:ee,value:c.value,onInput:H,autofocus:e.autofocus,readonly:fe.value,disabled:Y.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:g,onBlur:m},ae,h),null),[[Ae("intersect"),{handler:U},null,{once:!0}]]),e.autoGrow&&te(t("textarea",{class:[ee,"v-textarea__sizer"],id:`${ae.id}-sizer`,"onUpdate:modelValue":Ve=>c.value=Ve,ref:v,readonly:!0,"aria-hidden":"true"},null),[[Re,c.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:a?F=>{var O;return t(j,null,[(O=i.details)==null?void 0:O.call(i,F),r&&t(j,null,[t("span",null,null),t($e,{active:e.persistentCounter||x.value,value:M.value,max:B.value,disabled:e.disabled},i.counter)])])}:void 0})}),Ie({},D,b,f)}}),pa={class:"text-center"},ga={__name:"products",setup(e){const{t:n}=Ue(),{apiAuth:y}=Xe(),p=Te(),i=qe([]),c=V(""),x=$(()=>[{title:"ID",key:"_id",sortable:!0},{title:n("product.image"),key:"image",sortable:!1},{title:n("product.name"),key:"name",sortable:!0},{title:n("product.description"),key:"description",sortable:!0},{title:n("product.price"),key:"price",sortable:!0},{title:n("product.category"),key:"category",sortable:!0},{title:n("product.sell"),key:"sell",sortable:!0},{title:n("product.createdAt"),key:"createdAt",sortable:!0},{title:n("product.updatedAt"),key:"updatedAt",sortable:!0},{title:n("adminProduct.edit"),key:"edit",sortable:!1}]),I=async()=>{var l,o;try{const{data:r}=await y.get("/product/all");i.push(...r.result)}catch(r){console.log(r),p({text:n("api."+(((o=(l=r==null?void 0:r.response)==null?void 0:l.data)==null?void 0:o.message)||"unknownError")),snackbarProps:{color:"red"}})}};I();const m=V({open:!1,id:""}),M=l=>{l&&(m.value.id=l._id,f.value.value=l.name,w.value.value=l.price,g.value.value=l.description,C.value.value=l.category,P.value.value=l.sell),m.value.open=!0},B=()=>{k(),m.value.id="",m.value.open=!1,H.value.deleteFileRecord()},U=Ze({name:X().required(n("api.productNameRequired")),price:ea().required(n("api.productPriceRequired")).min(0,n("api.productPriceTooSmall")),description:X().required(n("api.productDescriptionRequired")),category:X().required(n("api.productCategoryRequired")).oneOf(["food","drink","music","phone"],n("api.productCategoryInvalid")),sell:aa().required(n("api.productSellRequired"))}),{handleSubmit:D,isSubmitting:b,resetForm:k}=ta({validationSchema:U,initialValues:{name:"",price:0,description:"",category:"",sell:!1}}),f=z("name"),w=z("price"),g=z("description"),C=z("category"),P=z("sell"),T=$(()=>[{text:n("productCategory.food"),value:"food"},{text:n("productCategory.drink"),value:"drink"},{text:n("productCategory.music"),value:"music"},{text:n("productCategory.phone"),value:"phone"}]),H=V(null),v=V([]),A=V([]),q=D(async l=>{var o,r,a;if(!((o=v.value[0])!=null&&o.error)){if(m.value.id.length===0&&v.value.length===0){p({text:n("api.productImageRequired"),snackbarProps:{color:"red"}});return}try{const u=new FormData;u.append("name",l.name),u.append("price",l.price),u.append("description",l.description),u.append("category",l.category),u.append("sell",l.sell),v.value.length>0&&u.append("image",v.value[0].file),m.value.id.length>0?await y.patch("/product/"+m.value.id,u):await y.post("/product",u),i.splice(0,i.length),I(),p({text:n(m.value.id.length>0?"adminProduct.editSuccess":"adminProduct.newSuccess"),snackbarProps:{color:"green"}}),B()}catch(u){console.log(u),p({text:n("api."+(((a=(r=u==null?void 0:u.response)==null?void 0:r.data)==null?void 0:a.message)||"unknownError")),snackbarProps:{color:"red"}})}}});return(l,o)=>{const r=Ne("VueFileAgent");return le(),ze(j,null,[t(da,null,{default:s(()=>[t(oa,null,{default:s(()=>[t(oe,{cols:"12"},{default:s(()=>[Ee("h1",pa,S(l.$t("nav.adminProducts")),1)]),_:1}),t(ra),t(oe,{cols:"12"},{default:s(()=>[t(ua,{items:i,headers:x.value,search:c.value},{top:s(()=>[t(ia,null,{default:s(()=>[t(L,{onClick:o[0]||(o[0]=a=>M(null))},{default:s(()=>[R(S(l.$t("adminProduct.new")),1)]),_:1}),t(He),t(W,{modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=a=>c.value=a),"prepend-inner-icon":"mdi-magnify",variant:"underlined"},null,8,["modelValue"])]),_:1})]),"item.image":s(({value:a})=>[t(Ge,{src:a,height:"50"},null,8,["src"])]),"item.sell":s(({value:a})=>[a?(le(),Oe(Ye,{key:0,icon:"mdi-check"})):Le("",!0)]),"item.createdAt":s(({value:a})=>[R(S(new Date(a).toLocaleString()),1)]),"item.updatedAt":s(({value:a})=>[R(S(new Date(a).toLocaleString()),1)]),"item.category":s(({value:a})=>[R(S(l.$t("productCategory."+a)),1)]),"item.edit":s(({item:a})=>[t(L,{icon:"mdi-pencil",variant:"text",onClick:u=>M(a)},null,8,["onClick"])]),_:2},1032,["items","headers","search"])]),_:1})]),_:1})]),_:1}),t(We,{modelValue:m.value.open,"onUpdate:modelValue":o[9]||(o[9]=a=>m.value.open=a),persistent:""},{default:s(()=>[t(la,{disabled:d(b),onSubmit:je(d(q),["prevent"])},{default:s(()=>[t(_e,null,{default:s(()=>[t(Je,null,{default:s(()=>[R(S(l.$t(m.value.id?"adminProduct.edit":"adminProduct.new")),1)]),_:1}),t(Ke,null,{default:s(()=>[t(W,{modelValue:d(f).value.value,"onUpdate:modelValue":o[2]||(o[2]=a=>d(f).value.value=a),label:l.$t("product.name"),"error-messages":d(f).errorMessage.value},null,8,["modelValue","label","error-messages"]),t(W,{modelValue:d(w).value.value,"onUpdate:modelValue":o[3]||(o[3]=a=>d(w).value.value=a),label:l.$t("product.price"),"error-messages":d(w).errorMessage.value,type:"number",min:"0"},null,8,["modelValue","label","error-messages"]),t(sa,{modelValue:d(C).value.value,"onUpdate:modelValue":o[4]||(o[4]=a=>d(C).value.value=a),"error-messages":d(C).errorMessage.value,items:T.value,label:l.$t("product.category"),"item-title":"text","item-value":"value"},null,8,["modelValue","error-messages","items","label"]),t(ma,{modelValue:d(P).value.value,"onUpdate:modelValue":o[5]||(o[5]=a=>d(P).value.value=a),label:l.$t("product.onSell"),"error-messages":d(P).errorMessage.value},null,8,["modelValue","label","error-messages"]),t(fa,{modelValue:d(g).value.value,"onUpdate:modelValue":o[6]||(o[6]=a=>d(g).value.value=a),label:l.$t("product.description"),"error-messages":d(g).errorMessage.value},null,8,["modelValue","label","error-messages"]),t(r,{ref_key:"fileAgent",ref:H,modelValue:v.value,"onUpdate:modelValue":o[7]||(o[7]=a=>v.value=a),"raw-model-value":A.value,"onUpdate:rawModelValue":o[8]||(o[8]=a=>A.value=a),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":l.$t("fileAgent.helpText"),"error-text":{type:l.$t("fileAgent.errorType"),size:l.$t("fileAgent.errorSize")}},null,8,["modelValue","raw-model-value","help-text","error-text"])]),_:1}),t(Qe,null,{default:s(()=>[t(L,{onClick:B},{default:s(()=>[R(S(l.$t("adminProduct.cancel")),1)]),_:1}),t(L,{type:"submit",loading:d(b)},{default:s(()=>[R(S(l.$t("adminProduct.submit")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};typeof re=="function"&&re(ga);export{ga as default};
