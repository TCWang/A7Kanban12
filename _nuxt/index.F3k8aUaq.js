import{o,c as r,a as t,t as c,z as u,P as p,F as h,y as m,Q as x,u as f,b as d,w as _}from"./entry.fUld2kCt.js";import{h as g}from"./hospitals.DJjIwUVG.js";import{_ as w}from"./nuxt-error-boundary.Du4gR65p.js";import{u as v}from"./vue.f36acd1f.CkHOfBrp.js";const b={class:"flex flex-col h-full bg-zinc-100 rounded-2xl shadow-md"},$=["src"],k={class:"p-4 flex flex-col"},y={class:"bg-blue-200 hover:bolder-red px-3 py-2 rounded text-lg"},C=["href"],B={__name:"Card",props:{hospital:Object},setup(e){return(s,n)=>(o(),r("div",{class:"flex-row flex-wrap shadow border-hidden mb-1 cursor-pointer w-1/2 md:w-1/4 lg:1/6 h-[200px] md:h-[220px]",onClick:n[0]||(n[0]=a=>("navigateTo"in s?s.navigateTo:u(p))(`/hospital/${e.hospital.name}`))},[t("div",b,[t("img",{src:`images/hospital/${e.hospital.figureLogo}`,alt:"",class:"ml-4 w-[80px] md:w-[120px] h-[100px] md:h-[120px] rounded-xl transform hover:scale-110 duration-200"},null,8,$),t("div",k,[t("div",null,[t("p",null,c(e.hospital.category),1),t("p",y,[t("a",{href:e.hospital.web},c(e.hospital.name),9,C)])])])])]))}},H=B,N={class:"flex flex-row flex-wrap"},S={__name:"Cards",setup(e){return(s,n)=>{const a=H;return o(),r("div",N,[(o(!0),r(h,null,m(u(g),l=>(o(),x(a,{key:l.id,hospital:l},null,8,["hospital"]))),128))])}}},T=S,z={class:"container"},E=t("h1",null,"地區醫療",-1),F={class:"text-center mx-auto flex flex-col"},L=t("h1",{class:"text-5xl text-red-600 mb-4"},"Sorry Something went wrong",-1),V=["onClick"],P={__name:"index",setup(e){return f(),v({title:"健康休閒-地區醫療",meta:[{name:"description",content:"A7新林口-社區網站: 12.健康休閒資訊平台 "}]}),(s,n)=>{const a=T,l=w;return o(),r("div",z,[d(l,null,{error:_(({error:i})=>[t("div",F,[L,t("code",null,c(i),1),t("button",{class:"text-white bg-blue-400 px-10 py-3 rounded mt-4",onClick:j=>i.value=null}," Go Back ",8,V)])]),default:_(()=>[E,d(a)]),_:1})])}}};export{P as default};
