import{p as r,r as e,j as s,L as g,s as a,b as w,C as m}from"./index-DUdDJH-P.js";const u=r.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;
`,n=r.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: calc((100% - 20px) / 2);
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 8px;
  padding: 14px;

  &:first-child {
    border: 1px solid var(--main-color);
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 40px) / 3);
    padding-left: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 240px;
  }
`,o=r.span`
  font-size: 12px;
  color: rgba(29, 30, 33, 0.4);
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    width: 18px;
    height: 18px;
    stroke-width: 2.4;
    stroke: var(--main-text-color);
    fill: var(--background-color);
  }

  @media screen and (min-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,l=r.span`
  font-size: 16px;
  font-weight: bold;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,f=()=>{const[i,d]=e.useState(null),[x,p]=e.useState(!0),[c,h]=e.useState(null);return e.useEffect(()=>{(async()=>{try{const t=await w.get("https://e-pharmacy-backend-ez9m.onrender.com/api/dashboard");d(t.data),console.log(t.data)}catch(t){h(t.message)}finally{p(!1)}})()},[]),x?s.jsx(g,{}):c?s.jsxs("div",{children:["Error: ",c]}):s.jsxs(u,{children:[s.jsxs(n,{children:[s.jsxs(o,{children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:s.jsx("use",{href:`${a}#icon-coins`})}),"All products"]}),s.jsx(l,{children:i.totalProducts})]}),s.jsxs(n,{children:[s.jsxs(o,{children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:s.jsx("use",{href:`${a}#icon-users`})}),"All suppliers"]}),s.jsx(l,{children:i.totalSuppliers})]}),s.jsxs(n,{children:[s.jsxs(o,{children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:s.jsx("use",{href:`${a}#icon-users`})}),"All customers"]}),s.jsx(l,{children:i.totalCustomers})]})]})},b=()=>s.jsx(m,{children:s.jsx(f,{})});export{b as default};
