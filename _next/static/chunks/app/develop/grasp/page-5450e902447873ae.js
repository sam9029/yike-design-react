(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7670,9053,3633,8034,2814,9942,3148,6011,2276,8722,5189,9671,4834,2761,272,4623,6148,9471,9507,677,5966,4509,3910,1116],{96011:function(e,t,r){Promise.resolve().then(r.bind(r,19326)),Promise.resolve().then(r.bind(r,71280)),Promise.resolve().then(r.bind(r,73439))},19326:function(e,t,r){"use strict";r.r(t);var s=r(7426),n=r(60373),l=r(13482);t.default=e=>{let{lang:t,code:r}=e;return(0,s.jsx)(l.Z,{codeTagProps:{},language:t,style:n.RY,customStyle:{fontSize:16,background:"#282c34",margin:0,padding:16,lineHeight:"inherit",overflow:"initial",fontFamily:"inherit",border:"none",borderRadius:8,maxHeight:500,overflowY:"auto"},children:r})}},71280:function(e,t,r){"use strict";r.r(t);var s=r(7426),n=r(13865),l=r(24921),o=r(61810),i=r(19326);t.default=e=>{let{code:t,lang:r}=e,[a,d]=(0,l.useState)(!1),c=(0,n.Z)({hidden:!a});return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,s.jsx)(o.CopyToClipboard,{text:t,children:(0,s.jsx)("button",{className:c,children:"Copy"})}),(0,s.jsx)("button",{onClick:()=>d(!a),children:"Code"})]}),(0,s.jsx)("div",{className:c,children:(0,s.jsx)(i.default,{lang:r,code:t})})]})}},73439:function(e,t,r){"use strict";r.r(t);var s=r(7426),n=r(24921),l=r(77215),o=r(12649);let i=e=>{let{anchor:t}=e;return(0,s.jsxs)("div",{className:"pl-3",children:[(0,s.jsx)("a",{className:"text-sm leading-loose",href:t.href,children:t.text}),t.children.map(e=>(0,s.jsx)(i,{anchor:e},e.href))]})},a={left:0,top:0};t.default=e=>{var t;let{toc:r}=e,d=null!==(t=(0,l.Z)(()=>document.querySelector("#yike-doc-container")))&&void 0!==t?t:a,[c,u]=(0,n.useState)([]),[f,{setAll:h}]=(0,o.Z)([]),[p,m]=(0,n.useState)(-1);return(0,n.useEffect)(()=>{let e=document.querySelectorAll("h2, h3, h4, h5, h6"),t=Array.from(e).map(e=>[e.offsetTop,e.id]).sort((e,t)=>e[0]-t[0]).map((e,t)=>{let[r,s]=e;return[r,{id:s,order:t}]});h(t),u(t.map(e=>{let[t]=e;return t}))},[h]),(0,n.useEffect)(()=>{let e=c.find(e=>d.top<e&&e<=d.top+100);if(e){let t=f.get(e);t&&m(t.order)}},[d.top,f,c]),(0,s.jsxs)("div",{className:"w-[133px] py-1 fixed right-1 top-20 overflow-hidden",children:[(0,s.jsx)("span",{className:"absolute h-full w-0.5 bg-[#E8E8E8] left-0 top-0"}),(0,s.jsx)("span",{className:"absolute w-0.5 h-5 my-1 bg-[#2B5AED] left-0 transition-top duration-300",style:{top:p<0?-99999:28*p+4}}),r.map(e=>(0,s.jsx)(i,{anchor:e},e.href))]})}}},function(e){e.O(0,[1618,4570,5172,1744],function(){return e(e.s=96011)}),_N_E=e.O()}]);