import{d as e,u as a,k as t,c as s,l,o,a as n,b as r,n as c,t as i,_ as u,p as d,q as v,s as f,F as m,r as p,g as k,x as h}from"./app.fd208343.js";const x=d("data-v-024e1674");v("data-v-024e1674");const y={key:0,class:"home-hero"},g={key:0,class:"figure"},b={key:1,id:"main-title",class:"title"},$={key:2,class:"description"};f();var _=e({expose:[],setup(e){const d=a(),v=t(),f=s((()=>v.value.heroImage||m.value||k.value||_.value)),m=s((()=>null!==v.value.heroText)),p=s((()=>v.value.heroText||d.value.title)),k=s((()=>null!==v.value.tagline)),h=s((()=>v.value.tagline||d.value.description)),_=s((()=>v.value.actionLink&&v.value.actionText)),I=s((()=>v.value.altActionLink&&v.value.altActionText));return x(((e,a)=>l(f)?(o(),n("header",y,[e.$frontmatter.heroImage?(o(),n("figure",g,[r("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):c("",!0),l(m)?(o(),n("h1",b,i(l(p)),1)):c("",!0),l(k)?(o(),n("p",$,i(l(h)),1)):c("",!0),l(_)?(o(),n(u,{key:3,item:{link:l(v).actionLink,text:l(v).actionText},class:"action"},null,8,["item"])):c("",!0),l(I)?(o(),n(u,{key:4,item:{link:l(v).altActionLink,text:l(v).altActionText},class:"action alt"},null,8,["item"])):c("",!0)])):c("",!0)))}});_.__scopeId="data-v-024e1674";const I=d("data-v-e5f225ce");v("data-v-e5f225ce");const T={key:0,class:"home-features"},A={class:"wrapper"},L={class:"container"},w={class:"features"},j={key:0,class:"title"},q={key:1,class:"details"};f();var B=e({expose:[],setup(e){const a=t(),u=s((()=>a.value.features&&a.value.features.length>0)),d=s((()=>a.value.features?a.value.features:[]));return I(((e,a)=>l(u)?(o(),n("div",T,[r("div",A,[r("div",L,[r("div",w,[(o(!0),n(m,null,p(l(d),((e,a)=>(o(),n("section",{key:a,class:"feature"},[e.title?(o(),n("h2",j,i(e.title),1)):c("",!0),e.details?(o(),n("p",q,i(e.details),1)):c("",!0)])))),128))])])])])):c("",!0)))}});B.__scopeId="data-v-e5f225ce";const C={},F=d("data-v-df8b2502");v("data-v-df8b2502");const z={key:0,class:"footer"},D={class:"container"},E={class:"text"};f();const G=F(((e,a)=>e.$frontmatter.footer?(o(),n("footer",z,[r("div",D,[r("p",E,i(e.$frontmatter.footer),1)])])):c("",!0)));C.render=G,C.__scopeId="data-v-df8b2502";const H=d("data-v-6e1bdf43");v("data-v-6e1bdf43");const J={class:"home","aria-labelledby":"main-title"},K={class:"home-content"};f();var M=e({expose:[],setup:e=>H(((e,a)=>{const t=k("Content");return o(),n("main",J,[r(_),h(e.$slots,"hero"),r(B),r("div",K,[r(t)]),h(e.$slots,"features"),r(C),h(e.$slots,"footer")])}))});M.__scopeId="data-v-6e1bdf43";export default M;