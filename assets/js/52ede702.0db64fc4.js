"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[5107],{42318:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"products/Data Management and Access Tools/hydroserver/index","title":"HydroServer","description":"HydroServer Portal","source":"@site/docs/products/Data Management and Access Tools/hydroserver/index.md","sourceDirName":"products/Data Management and Access Tools/hydroserver","slug":"/products/Data Management and Access Tools/hydroserver/","permalink":"/docuhub-staging/docs/products/Data Management and Access Tools/hydroserver/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/Data Management and Access Tools/hydroserver/index.md","tags":[{"inline":true,"label":"hydroserver","permalink":"/docuhub-staging/docs/tags/hydroserver"},{"inline":true,"label":"python","permalink":"/docuhub-staging/docs/tags/python"},{"inline":true,"label":"django","permalink":"/docuhub-staging/docs/tags/django"}],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"HydroServer","description":"HydroServer Portal","tags":["hydroserver","python","django"]},"sidebar":"products","previous":{"title":"Water Prediction Node","permalink":"/docuhub-staging/docs/products/Data Management and Access Tools/waternode/"},"next":{"title":"NETWA","permalink":"/docuhub-staging/docs/products/Data Management and Access Tools/netwa/"}}');var o=t(74848),s=t(28453);const a={sidebar_position:10,title:"HydroServer",description:"HydroServer Portal",tags:["hydroserver","python","django"]},i="HydroServer",d={},l=[{value:"Software and Technologies",id:"software-and-technologies",level:2},{value:"Access",id:"access",level:2},{value:"Open-Source Code Development",id:"open-source-code-development",level:2},{value:"Bugs and Issues",id:"bugs-and-issues",level:2},{value:"Development Team",id:"development-team",level:2}];function c(e){const r={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"hydroserver",children:"HydroServer"})}),"\n",(0,o.jsx)(r.p,{children:"Future iterations of the National Water Model will need to assimilate local-scale data to improve forecasts. The United States Geological Survey (USGS) operates the largest network of operational streamflow gages in the U.S., but generally does not incorporate data from gages operated by other agencies/organizations. A cooperative network of the many streamflow gages outside of the USGS network would enhance data available to national-scale modeling. No cyberinfrastructure currently exists to support such a network."}),"\n",(0,o.jsx)(r.p,{children:"HydroServer is an open-source software stack with functionality for collecting, managing, and sharing operational hydrologic data - e.g., time series of hydrologic observations from fixed monitoring sites like streamflow gages. HydroServer development for CIROH is focused on creating an enhanced, national-scale stream gage network to make more data available to operational modeling."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"CIROH Portal",src:t(27632).A+"",width:"2999",height:"1242"})}),"\n",(0,o.jsx)(r.h2,{id:"software-and-technologies",children:"Software and Technologies"}),"\n",(0,o.jsx)(r.p,{children:"The HydroServer software stack includes:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"A user-oriented web application for creation of monitorings sites, site metadata, information about observed variables, etc."}),"\n",(0,o.jsx)(r.li,{children:"A Python package and desktop app for loading time series data from monitoring sites into HydroServer"}),"\n",(0,o.jsx)(r.li,{children:"Application Programming Interfaces (APIs) for data ingest into HydroServer, data querying and retrieval, and data and metadata management"}),"\n",(0,o.jsx)(r.li,{children:"A highly performant time series database for storing and managing time series data"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Additional planned tools include:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"A Python client package for retrieving time series data from HydroServer"}),"\n",(0,o.jsx)(r.li,{children:"Automated archival of time series data to the HydroShare repository"}),"\n",(0,o.jsx)(r.li,{children:"Integration of data quality control functionality"}),"\n",(0,o.jsx)(r.li,{children:"Web app(s) for data visualization"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"The HydroServer software stack is being build using the following technologies:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://vuejs.org/",children:"Vue.js"})," - A JavaScript framework for building web user interfaces"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://www.djangoproject.com/",children:"Python/Django"})," - A Python web framework for backend web development"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://www.ogc.org/standard/sensorthings/",children:"Open Geospatial Consortium SensorThings API"})," - An API specification and data model for managing and retrieving observations and metadata from sensor systems."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://www.timescale.com/",children:"Timescale Cloud"})," - A cloud native implementation of PostgreSQL and its Timescale extension for storing and managing time series data"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://aws.amazon.com/",children:"Amazon Web Services (AWS)"})," - The HydroServer web application and APIs are deployed using AWS."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"access",children:"Access"}),"\n",(0,o.jsx)(r.p,{children:"As of August 28, 2023, we are currently working on setting up domains, associated security certificates, and additional settings, but we anticipate that the CIROH HydroServer instances will be:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://hydroserver.ciroh.org",children:"https://hydroserver.ciroh.org"})," - Production instance of HydroServer for CIROH"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://hydroserver-dev.ciroh.org",children:"https://hydroserver-dev.ciroh.org"})," - Development instance for internal development and testing"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://hydroserver-beta.ciroh.org",children:"https://hydroserver-beta.ciroh.org"})," - Beta instance for testing and demonstration of latest functionality"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"open-source-code-development",children:"Open-Source Code Development"}),"\n",(0,o.jsxs)(r.p,{children:["The HydroServer software stack is developed as open-source software using the BSD3 open source license. All code development is hosted in our GitHub repositories hosted under the HydroServer GitHub Organization ",(0,o.jsx)(r.a,{href:"https://github.com/hydroserver2/",children:"https://github.com/hydroserver2/"})]}),"\n",(0,o.jsx)(r.h2,{id:"bugs-and-issues",children:"Bugs and Issues"}),"\n",(0,o.jsx)(r.p,{children:"Bugs, issues, and feature requests related to HydroServer applications can be reported via their respective GitHub repositories at:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://github.com/orgs/hydroserver2/repositories",children:"https://github.com/orgs/hydroserver2/repositories"})}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"development-team",children:"Development Team"}),"\n",(0,o.jsx)(r.p,{children:"The HydroServer software stack is under development at the Utah Water Research Laboratory at Utah State University. The main contributors include:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Jeff Horsburgh - Associate Professor, Utah Water Research Laboratory and Civil and Environmental Engineering, Utah State University"}),"\n",(0,o.jsx)(r.li,{children:"Ken Lippold - Software Engineer, Utah Water Research Laboratory, Utah State University"}),"\n",(0,o.jsx)(r.li,{children:"Daniel Slaugh - Software Engineer, Utah Water Research Laboratory, Utah State University"}),"\n",(0,o.jsx)(r.li,{children:"Maurier Ramirez - Software Engineer, Utah Water Research Laboratory, Utah State University"}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},27632:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/hydroserver-b444068e12a63e2c95946a182893e0eb.png"},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);