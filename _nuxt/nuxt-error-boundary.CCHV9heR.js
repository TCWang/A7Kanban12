import{f as c,r as d,R as i,K as _}from"./entry.CxQPIgWF.js";const v=c({emits:{error(a){return!0}},setup(a,{slots:r,emit:p}){const n=d(null),o=_();i((e,u,f)=>{if(!o.isHydrating||!o.payload.serverRendered)return p("error",e),o.hooks.callHook("vue:error",e,u,f),n.value=e,!1});function t(){n.value=null}return()=>{var e,u;return n.value?(e=r.error)==null?void 0:e.call(r,{error:n,clearError:t}):(u=r.default)==null?void 0:u.call(r)}}});export{v as _};
