import{_ as v}from"./nuxt-link.DoE_9t04.js";import{u as w}from"./vue.f36acd1f.oe1UF14O.js";import{u as C,q as D}from"./query.qDoPAte4.js";import{_ as b,q as k,x as A,c,a as e,F as $,y as q,z as I,o as i,b as S,w as B,A as F,t as u,p as N,e as z}from"./entry.CVpjktgq.js";import"./preview.6tmS7jQS.js";const y=s=>(N("data-v-f27d2285"),s=s(),z(),s),L={class:"w-full max-w-6xl not-prose"},V=y(()=>e("h2",null,"健康指引",-1)),E=y(()=>e("div",{class:"column space-x-24 ml-6"},[e("div",null,"類別"),e("div",null,"標題"),e("div",null,"日期")],-1)),H={class:"pl-6"},M={class:"pl-6"},Y={__name:"index",async setup(s){let o,d;w({title:"健康休閒-健康指引",meta:[{name:"description",content:"A7新林口-社區網站: 12.健康休閒資訊平台 "}]});const{data:_}=([o,d]=k(()=>C("health-list",()=>D("/health").where({_path:{$ne:"/health"}}).only(["_path","title","publishedAt","category","sequence","link","image"]).sort({publishedAt:-1}).sort({category:1}).find())),o=await o,d(),o),m=A(()=>{if(!_.value)return[];const l=[];let n=null;for(const a of _.value){const t=new Date(a.publishedAt),g=t.getFullYear(),p=t.getMonth()+1,h=t.getDate(),f=`${g}-${p<10?"0":""}${p}-${h<10?"0":""}${h}`,r=a.category,x=r!==n;a.displayCategory=x,a.categorykeep=r,a.fullDate=f,l.push(a),n=r}return l});return(l,n)=>{const a=v;return i(),c("section",L,[V,E,e("ul",null,[(i(!0),c($,null,q(I(m),t=>(i(),c("li",{style:{"list-style":"none"},key:t._path},[S(a,{to:t._path,class:"column hover:bg-gray-100 dark:hover:bg-gray-800"},{default:B(()=>[e("div",{class:F({"text-white ":!t.displayCategory,"text-gray-900":t.displayCategory})},u(t.category),3),e("div",H,u(t.title),1),e("div",M,u(t.fullDate),1)]),_:2},1032,["to"])]))),128))])])}}},P=b(Y,[["__scopeId","data-v-f27d2285"]]);export{P as default};
