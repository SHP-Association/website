import{S as w}from"./useSeoMeta-BDGDuhcr.js";import{l as p,d as f,o as r,h,w as v,a as e,c as u,F as y,r as g,t as l,j as _,_ as C}from"./index-DWBUp1pB.js";/**
 * @license lucide-vue-next v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=({size:t,strokeWidth:s=2,absoluteStrokeWidth:c,color:n,iconNode:o,name:a,class:N,...k},{slots:m})=>p("svg",{...d,width:t||d.width,height:t||d.height,stroke:n||d.stroke,"stroke-width":c?Number(s)*24/Number(t):s,class:["lucide",`lucide-${M(a??"icon")}`],...k},[...o.map(b=>p(...b)),...m.default?[m.default()]:[]]);/**
 * @license lucide-vue-next v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(t,s)=>(c,{slots:n})=>p(S,{...c,iconNode:s,name:t},n);/**
 * @license lucide-vue-next v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=i("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=i("CodeIcon",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-vue-next v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=i("FileTextIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=i("RocketIcon",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=i("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=i("TrendingUpIcon",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),T={class:"methodology-grid"},q={class:"step-header"},D={class:"step-number"},F={class:"step-icon-bg"},L={class:"step-title"},P={class:"step-desc"},j={class:"step-outcomes"},H=f({__name:"MethodologySection",setup(t){const s=[{number:"01",title:"Understand",icon:z,description:"We perform deep technical discovery, audit existing systems, and clarify root business goals before writing code.",outcomes:["Architecture Audit","Risk Assessment","Requirements Matrix"]},{number:"02",title:"Plan",icon:A,description:"We establish clear system architecture, database schemas, technology choices, and milestones.",outcomes:["Technical Specification","API Blueprint","Sprint Milestones"]},{number:"03",title:"Build",icon:I,description:"Our senior engineers develop clean, type-safe, modular software adhering to design system tokens and clean code principles.",outcomes:["Vue 3 Frontend","Microservices APIs","CI/CD Automation"]},{number:"04",title:"Test",icon:x,description:"Rigorous unit testing, integration tests, load tests, and security vulnerability scans ensure bulletproof stability.",outcomes:["90%+ Test Coverage","Load Benchmark","Security Audit"]},{number:"05",title:"Deploy",icon:B,description:"We orchestrate zero-downtime production deployments to containerized cloud environments with automated rollback triggers.",outcomes:["Kubernetes Rollout","Zero Downtime","DNS & SSL Config"]},{number:"06",title:"Improve",icon:R,description:"Continuous monitoring, APM metrics analysis, cost optimization, and iterative performance tuning.",outcomes:["24/7 Monitoring","Latency Reduction","Feature Iterations"]}];return(c,n)=>(r(),h(w,{tag:"Working Process",title:"Structured Methodology Built for Predictable Success",subtitle:"We eliminate ambiguity through a transparent 6-stage engineering process designed to deliver stable production software on time.","bg-alt":""},{default:v(()=>[e("div",T,[(r(),u(y,null,g(s,o=>e("div",{key:o.number,class:"step-card"},[e("div",q,[e("span",D,l(o.number),1),e("div",F,[(r(),h(_(o.icon),{class:"step-icon"}))])]),e("h3",L,l(o.title),1),e("p",P,l(o.description),1),e("ul",j,[(r(!0),u(y,null,g(o.outcomes,a=>(r(),u("li",{key:a},[n[0]||(n[0]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#EAB308","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[e("polyline",{points:"20 6 9 17 4 12"})],-1)),e("span",null,l(a),1)]))),128))])])),64))])]),_:1}))}}),V=C(H,[["__scopeId","data-v-85f492a3"]]);export{V as M,i as c};
