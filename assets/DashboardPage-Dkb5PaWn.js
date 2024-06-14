import{p as t,a as p,b as h,r as m,f as b,j as e,s,C as j}from"./index-DRPtGp9A.js";const v=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 768px) {
    max-width: 630px;
  }
`,T=t.table`
  background-color: #ffffff;
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    width: 630px;
    height: 512px;
  }
`,z=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,y=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 14px;
`,C=t.tbody``,f=t.tr``,r=t.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`,E=t.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  
  span {
    display: inline-block;
    padding: 4px 13.5px;
    border-radius: 40px;
    background-color: ${({type:n})=>{switch(n){case"Expense":return"rgba(232, 80, 80, 0.1)";case"Error":return"rgba(29, 30, 33, 0.1)";case"Income":return"rgba(89, 177, 122, 0.1)";default:return"rgba(0, 0, 0, 0.05)"}}};
  
  color: ${({type:n})=>{switch(n){case"Expense":return"var(--cancel-color)";case"Error":return"var(--main-text-color)";case"Income":return"var(--main-color)";default:return"inherit"}}};

  @media screen and (min-width: 768px) {
    font-size: 14px;
`,$=t.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
`,k=t.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  color: ${({type:n})=>{switch(n){case"Expense":return"var(--cancel-color)";case"Error":return"var(--main-text-color)";case"Income":return"var(--main-color)";default:return"inherit"}}};

  @media screen and (min-width: 768px) {
    font-size: 16px;
`,S=()=>{const n=p(),i=h(d=>d.dashboard.transactions);return m.useEffect(()=>{n(b())},[n]),e.jsx(v,{children:e.jsxs(T,{children:[e.jsx(z,{children:"Income/Expenses"}),e.jsx(y,{children:e.jsxs(f,{children:[e.jsx(r,{children:"Today"}),e.jsx(r,{}),e.jsx(r,{})]})}),e.jsx(C,{children:i.map(d=>e.jsxs(f,{children:[e.jsx(E,{type:d.type,children:e.jsx("span",{children:d.type})}),e.jsx($,{children:d.name}),e.jsx(k,{type:d.type,children:d.amount})]},d._id))})]})})},I=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 630px;
  }
`,B=t.table`
  background-color: #ffffff;
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    width: 630px;
    height: 512px;
  }
`,R=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,A=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,H=t.tbody``,g=t.tr``,o=t.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,a=t.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  font-size: 12px;

  &:last-child {
    border-right: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
`,D=()=>{const n=p(),i=h(d=>d.dashboard.recentCustomers);return m.useEffect(()=>{n(b())},[n]),e.jsx(I,{children:e.jsxs(B,{children:[e.jsx(R,{children:"Recent Customers"}),e.jsx(A,{children:e.jsxs(g,{children:[e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Email"}),e.jsx(o,{children:"Spent"})]})}),e.jsx(H,{children:i.map(d=>e.jsxs(g,{children:[e.jsx(a,{children:d.name}),e.jsx(a,{children:d.email}),e.jsx(a,{children:d.spent})]},d._id))})]})})},N=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;
`,l=t.div`
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
`,x=t.span`
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
`,c=t.span`
  font-size: 16px;
  font-weight: bold;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,P=()=>{const n=p(),{totalProducts:i,totalSuppliers:d,totalCustomers:w}=h(u=>u.dashboard);return m.useEffect(()=>{n(b())},[n]),e.jsxs(N,{children:[e.jsxs(l,{children:[e.jsxs(x,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`${s}#icon-coins`})}),"All products"]}),e.jsx(c,{children:i})]}),e.jsxs(l,{children:[e.jsxs(x,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`${s}#icon-users`})}),"All suppliers"]}),e.jsx(c,{children:d})]}),e.jsxs(l,{children:[e.jsxs(x,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`${s}#icon-users`})}),"All customers"]}),e.jsx(c,{children:w})]})]})},W=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 20px;
  }
`,L=()=>e.jsxs(j,{children:[e.jsx(P,{}),e.jsxs(W,{children:[e.jsx(D,{}),e.jsx(S,{})]})]});export{L as default};
