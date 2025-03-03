"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[3239],{85522:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"products/Evaluation Tools/rtiteehr/index","title":"TEEHR","description":"Tools for Exploratory Evaluation in Hydrologic Research","source":"@site/docs/products/Evaluation Tools/rtiteehr/index.md","sourceDirName":"products/Evaluation Tools/rtiteehr","slug":"/products/Evaluation Tools/rtiteehr/","permalink":"/docuhub-staging/docs/products/Evaluation Tools/rtiteehr/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/Evaluation Tools/rtiteehr/index.md","tags":[{"inline":true,"label":"teehr","permalink":"/docuhub-staging/docs/tags/teehr"},{"inline":true,"label":"python","permalink":"/docuhub-staging/docs/tags/python"}],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"TEEHR","description":"Tools for Exploratory Evaluation in Hydrologic Research","tags":["teehr","python"]},"sidebar":"products","previous":{"title":"CSES","permalink":"/docuhub-staging/docs/products/Evaluation Tools/cses/"},"next":{"title":"Data Management and Access Tools","permalink":"/docuhub-staging/docs/products/Data Management and Access Tools/"}}');var n=o(74848),s=o(28453),i=o(22016);const a={sidebar_position:7,title:"TEEHR",description:"Tools for Exploratory Evaluation in Hydrologic Research",tags:["teehr","python"]},c="TEEHR",l={},u=[];function h(t){const e={h1:"h1",header:"header",p:"p",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"teehr",children:"TEEHR"})}),"\n",(0,n.jsx)(e.p,{children:'TEEHR (pronounced "tier") is a python tool set for loading, storing, processing and visualizing hydrologic data, particularly National Water Model data, for the purpose of exploring and evaluating the datasets to assess their skill and performance.'}),"\n","\n",(0,n.jsx)(i.A,{username:"RTIInternational",repo:"teehr"})]})}function d(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},22016:(t,e,o)=>{o.d(e,{A:()=>s});var r=o(96540),n=o(74848);const s=function(t){let{repo:e,username:o,subfolder:s="",readmeFileName:i=""}=t;const[a,c]=(0,r.useState)("");return(0,r.useEffect)((()=>{let t="";t=""!==s?""!==i?`https://api.github.com/repos/${o}/${e}/contents/${s}/${i}?ref=main`:`https://api.github.com/repos/${o}/${e}/contents/${s}/readme?ref=main`:""!==i?`https://api.github.com/repos/${o}/${e}/${i}?ref=main`:`https://api.github.com/repos/${o}/${e}/readme?ref=main`,fetch(t,{headers:{Accept:"application/vnd.github.v3.html"}}).then((t=>{if(!t.ok)throw new Error("Failed to fetch README");return t.text()})).then((t=>{const r=(t=>{const r=(new DOMParser).parseFromString(t,"text/html");return r.querySelectorAll("img[src]").forEach((t=>{const r=t.getAttribute("src");if(!r.startsWith("http")){const n=r.replace(/^\//,"");t.src=`https://github.com/${o}/${e}/raw/main/${s?s+"/":""}${n}`}})),r.querySelectorAll("a[href]").forEach((t=>{const r=t.getAttribute("href");if(r&&!r.startsWith("http")&&!r.startsWith("#")){const n=r.replace(/^\//,"");t.href=`https://github.com/${o}/${e}/blob/main/${s?s+"/":""}${n}`}})),r.body.innerHTML})(t);c(`\n                <blockquote style='padding:10px;font-size:1.1rem;'>\n                    <p><strong>NOTE</strong></p>\n                    <p>Below content is rendered from <a href='https://github.com/${o}/${e}/blob/main/README.md'>https://github.com/${o}/${e}/blob/main/README.md</a></p>\n                    <p></p>\n                </blockquote>\n                `+r)})).catch((t=>console.error("Error fetching README:",t)))}),[e,o,s,i]),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})}},28453:(t,e,o)=>{o.d(e,{R:()=>i,x:()=>a});var r=o(96540);const n={},s=r.createContext(n);function i(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:i(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);