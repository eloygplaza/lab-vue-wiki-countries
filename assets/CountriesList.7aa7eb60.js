import{r as i,u as p,w as f,o as v,a as r,b as t,c as a,d as e,F as g,e as w,f as d,g as k,h as x,i as C,t as y}from"./index.a796ce4d.js";import{g as L}from"./index.fbf7f986.js";const B="/lab-vue-wiki-countries/assets/earth.9ae72609.png",N={class:"container",style:{height:"calc(100vh - 52px)"}},V={class:"columns mt-0 is-centered",style:{height:"100%"}},b={key:0,class:"column is-4",style:{overflow:"auto"}},D={class:"media-left"},E={class:"image is-64x64"},F=["src"],j={class:"media-content"},I={class:"content"},M={key:1,class:"column is-8 is-flex is-justify-content-center is-align-items-center is-flex-direction-column"},R=e("div",{class:"image is-128x128"},[e("img",{src:B,class:"imgEarth"})],-1),S=e("div",null,"No seas t\xEDmid@ elige un pais :D",-1),$=[R,S],H={__name:"CountriesList",setup(q){const c=i(!1),l=i(void 0),s=i(),o=p();o.params.code==null?s.value=!0:typeof o.params.code<"u"?s.value=!1:s.value=!0,f(()=>o.params.code,_=>{s.value=!1});const u=async()=>{l.value=await L(),c.value=!0};return v(async()=>{u()}),(_,z)=>{const m=r("router-link"),h=r("router-view");return t(),a("div",N,[e("div",V,[c.value?(t(),a("div",b,[(t(!0),a(g,null,w(l.value,n=>(t(),x(m,{class:"media is-clickable",to:{name:"details",params:{code:n.alpha3Code}}},{default:C(()=>[e("figure",D,[e("p",E,[e("img",{src:`https://flagpedia.net/data/flags/icon/72x54/${n.alpha2Code.toLowerCase()}.png`},null,8,F)])]),e("div",j,[e("div",I,[e("p",null,[e("strong",null,y(n.alpha3Code),1)])])])]),_:2},1032,["to"]))),256))])):d("",!0),s.value?(t(),a("div",M,$)):d("",!0),k(h)])])}}};export{H as default};
