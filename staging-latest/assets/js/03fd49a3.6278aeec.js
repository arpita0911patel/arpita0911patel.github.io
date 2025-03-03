"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[9087],{37562:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"products/Data Management and Access Tools/waternode/index","title":"Water Prediction Node","description":"Water Node Website","source":"@site/docs/products/Data Management and Access Tools/waternode/index.md","sourceDirName":"products/Data Management and Access Tools/waternode","slug":"/products/Data Management and Access Tools/waternode/","permalink":"/docs/products/Data Management and Access Tools/waternode/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/Data Management and Access Tools/waternode/index.md","tags":[{"inline":true,"label":"waternode","permalink":"/docs/tags/waternode"},{"inline":true,"label":"CoastWatch","permalink":"/docs/tags/coast-watch"},{"inline":true,"label":"national water center","permalink":"/docs/tags/national-water-center"}],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"title":"Water Prediction Node","description":"Water Node Website","tags":["waternode","CoastWatch","national water center"]},"sidebar":"products","previous":{"title":"nwmurl","permalink":"/docs/products/Data Management and Access Tools/dataaccess/NWMURL Library"},"next":{"title":"HydroServer","permalink":"/docs/products/Data Management and Access Tools/hydroserver/"}}');var n=a(74848),i=a(28453);const r={sidebar_position:9,title:"Water Prediction Node",description:"Water Node Website",tags:["waternode","CoastWatch","national water center"]},s="Welcome to the Water Prediction Node",l={},d=[{value:"Data Catalog",id:"data-catalog",level:2},{value:"Current WPN projects",id:"current-wpn-projects",level:2},{value:"Website repository",id:"website-repository",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"welcome-to-the-water-prediction-node",children:"Welcome to the Water Prediction Node"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://waternode.ciroh.org/",children:"The Water Prediction Node (WPN) website"})," is a collaborative effort between CIROH, NOAA CoastWatch, and the National Water Center. The purpose of the website is to intake and disseminate remote sensing data relevant to hydrological modeling, prediction, and analysis. The data will come from a variety of sources from within NOAA, CIROH, as well as potentially other agencies and companies. This data will be disseminated to CIROH researchers, Water Center operations, and the general public."]}),"\n",(0,n.jsx)(t.p,{children:"The other main purpose of the website is to serve as an educational platform and facilitator for the use of satellite imagery so that stakeholders that aren't experts in the processing and acquisition of remote sensing data can still use satellite imagery in their research efforts."}),"\n",(0,n.jsx)(t.h2,{id:"data-catalog",children:"Data Catalog"}),"\n",(0,n.jsxs)(t.p,{children:["The WPN has a ",(0,n.jsx)(t.a,{href:"https://stacspec.org/en",children:"STAC"})," data catalog. The catalog can be accessed via the ",(0,n.jsx)(t.a,{href:"https://waternode.ciroh.org/catalog/?.language=en",children:"graphical browser"})," or programatically via R or Python. The WPN has ",(0,n.jsx)(t.a,{href:"https://colab.research.google.com/drive/17IME_lDGYwpLR_Wv-NZW5nm519XK3oMT?usp=sharing",children:"a tutorial"})," demonstrating how to download WPN data via python. More tutorials for working with WPN data will be created at the ",(0,n.jsx)(t.a,{href:"https://waternode.ciroh.org/tutorials.html",children:"tutorials page"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The two main initial focuses of the data catalog will be:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Flood maps created using satellite data. Maps created by ",(0,n.jsx)(t.a,{href:"https://www.star.nesdis.noaa.gov/star/index.php",children:"NESDIS STAR"})," using VIIRS, Sentinel 1/2, landsat, and GOES ABI will be made available."]}),"\n",(0,n.jsx)(t.li,{children:"ET related data. The WPN will catalog NESDIS STAR soil moisture products as well as remotely sensed vegetation indices that have the potential to improve hydrological model validation and evaluation efforts."}),"\n",(0,n.jsx)(t.li,{children:"Baseline inundated extents and river widths. Baseline inundated extents are already being produced by the National Water Center and have the potential to inform the flood masp in the catalog. Multi-year baselines can also be informative when evaluating drought stricken regions. River widths have the potential to be assimilated into the National Water Model to improve synthetic rating curves as well as model discharge estimates."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"current-wpn-projects",children:"Current WPN projects"}),"\n",(0,n.jsxs)(t.p,{children:["The Water Prediction Node ",(0,n.jsx)(t.a,{href:"https://waternode.ciroh.org/fim.html",children:"first project"})," is making it easier to perform qualitative comparisons between flood maps created from satellite imagery and flood maps created using the inundation models used by the National Water Center (NWC). The WPN will enable these comparisons by focusing on:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Exposing WPN data catalog assets as a web mapping service or web mapping tile service. This will allow stakeholders to easily import WPN satellite derived flood maps into their GIS viewer of choice. This satellite derived flood map layer can then be quickly compared to modeled inundation."}),"\n",(0,n.jsx)(t.li,{children:"Creating easy to access collections of satellite imagery of notable floods so that retrospective evaluation is easier."}),"\n",(0,n.jsxs)(t.li,{children:["Creating a ",(0,n.jsx)(t.a,{href:"https://www.ogc.org/standard/wps/",children:"web processing service"})," that allows for the creation of agreement maps in the style of ",(0,n.jsx)(t.a,{href:"https://github.com/noaa-owp/gval",children:"gval"}),". These agreement maps will highlight areas of agreement and disagreement between the modelled and remotely sensed flood maps and will allow the computation of agreement metrics."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"website-repository",children:"Website repository"}),"\n",(0,n.jsxs)(t.p,{children:["The source for the website implementation can be found ",(0,n.jsx)(t.a,{href:"https://github.com/dylanlee/wnweb/tree/main",children:"here"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>s});var o=a(96540);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);