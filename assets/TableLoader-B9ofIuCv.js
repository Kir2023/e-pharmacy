import{W as n,p as e,j as s}from"./index-BhDmYLhS.js";const i=n`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`,o=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,a=e.div`
  width: 8px;
  height: 8px;
  margin: 0 4px;
  background-color: var(--main-color);
  border-radius: 50%;
  display: inline-block;
  animation: ${i} 1.4s infinite ease-in-out both;
  animation-delay: ${t=>t.$delay||"0s"};
`,l=()=>s.jsxs(o,{children:[s.jsx(a,{$delay:"0s"}),s.jsx(a,{$delay:"0.2s"}),s.jsx(a,{$delay:"0.4s"})]});export{l as T};
