import{_ as y}from"./nuxt-link.BHaeahw8.js";import{u as w,q as v}from"./query.B42dWvi6.js";import{_ as b,q as D,x as k,c as d,a as e,F as $,y as C,z as A,o as i,b as q,w as I,t as l,p as S,e as B}from"./entry.DyL4MXnk.js";import"./preview.CkFPkQUR.js";const F=o=>(S("data-v-b0134f9f"),o=o(),B(),o),N={class:"w-full max-w-6xl not-prose"},z=F(()=>e("h2",null,"市府公告 - 桃園市政府",-1)),L={class:"flex flex-col lg:flex-row flex-wrap"},V={class:"m-2 flex flex-row md:flex-row h-full bg-zinc-100 rounded-2xl shadow-md"},E=["src"],M={class:"p-4 flex flex-col"},Y={class:"text-bold"},j={class:"mt-auto"},G={class:"mt-auto"},H={class:"mt-auto"},J={__name:"index",async setup(o){let a,_;const{data:u}=([a,_]=D(()=>w("sample-list",()=>v("/sample").where({_path:{$ne:"/sample"}}).only(["_path","title","publishedAt","category","author","sequence","link","image"]).sort({publishedAt:-1}).find())),a=await a,_(),a),f=k(()=>{if(!u.value)return[];const n=[];let r=null;for(const s of u.value){const t=new Date(s.publishedAt),m=t.getFullYear(),p=t.getMonth()+1,h=t.getDate(),x=`${m}-${p<10?"0":""}${p}-${h<10?"0":""}${h}`,c=s.category,g=c!==r;s.displayCategory=g,s.categorykeep=c,s.fullDate=x,n.push(s),r=c}return n});return(n,r)=>{const s=y;return i(),d("section",N,[z,e("div",L,[(i(!0),d($,null,C(A(f),t=>(i(),d("div",{key:t._path,class:"relative shadow border-hidden w-full lg:w-1/2 overflow-hidden mb-5 cursor-pointer h-full"},[e("div",V,[q(s,{to:t._path,class:"hover:bg-gray-100 dark:hover:bg-gray-800"},{default:I(()=>[e("img",{src:`${t.image}`,alt:"",class:"w-[150px] md:w-[240px] h-[200px] md:h-[320px] rounded-xl transform hover:scale-110 duration-200"},null,8,E)]),_:2},1032,["to"]),e("div",M,[e("div",null,[e("p",Y,l(t.title),1),e("p",j,"日期: "+l(t.fullDate),1),e("p",G,"類別: "+l(t.category),1),e("p",H,"主辦: "+l(t.author),1)])])])]))),128))])])}}},R=b(J,[["__scopeId","data-v-b0134f9f"]]);export{R as default};
