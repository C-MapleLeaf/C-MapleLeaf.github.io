var f=(l,d,s)=>new Promise((m,t)=>{var r=o=>{try{e(s.next(o))}catch(a){t(a)}},i=o=>{try{e(s.throw(o))}catch(a){t(a)}},e=o=>o.done?m(o.value):Promise.resolve(o.value).then(r,i);e((s=s.apply(l,d)).next())});import{W as _,l as k,aF as C,aZ as v,c as x}from"./entry/index-7B4pLcF8.js";import{P as b}from"./index-C1_x6P1r.js";import{_ as g}from"./CurrentPermissionMode.vue_vue_type_script_setup_true_lang-H1v2XdtP.js";import{d as B,c as P,a7 as S,Z as A,a8 as M,a9 as c,k as n,u as p,$ as T,G as u}from"./vue-BjERyvPm.js";import{aE as $,Y as w}from"./antd-BmrhB3rb.js";import"./useContentViewHeight-qxE0TPQs.js";import"./useWindowSizeFn-DXCLMnp0.js";import"./onMountedOrActivated-DcvTUt7V.js";const y={class:"mt-4"},N=B({__name:"index",setup(l){const{refreshMenu:d}=_(),s=k(),m=C(),t=P(()=>m.getProjectConfig.permissionMode===v.BACK);function r(i){return f(this,null,function*(){const e="fakeToken"+i;s.setToken(e),s.getUserInfoAction(),d()})}return(i,e)=>{const o=S("a-button");return A(),M(p(b),{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:c(()=>[n(g),n(p($),{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),T("div",y,[u(" 权限切换(请先切换权限模式为后台权限模式): "),n(p(w),null,{default:c(()=>[n(o,{onClick:e[0]||(e[0]=a=>r(1)),disabled:!t.value},{default:c(()=>[u(" 获取用户id为1的菜单 ")]),_:1},8,["disabled"]),n(o,{onClick:e[1]||(e[1]=a=>r(2)),disabled:!t.value},{default:c(()=>[u(" 获取用户id为2的菜单 ")]),_:1},8,["disabled"])]),_:1})])]),_:1})}}}),G=x(N,[["__scopeId","data-v-176e63cc"]]);export{G as default};