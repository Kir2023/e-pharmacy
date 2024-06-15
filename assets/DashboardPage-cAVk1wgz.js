import{p as t,a as f,b as w,r as a,j as e,f as u,n as v,s as c,C as z}from"./index-DDfpZsUr.js";import{T as y}from"./TableLoader-DlmeU0NO.js";const E=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 768px) {
    max-width: 630px;
  }
`,C=t.table`
  background-color: var(--background-color);
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    width: 630px;
    height: 512px;
  }
`,$=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,S=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 14px;
`,k=t.tbody``,l=t.tr``,x=t.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`,j=t.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  
  span {
    display: inline-block;
    padding: 4px 13.5px;
    border-radius: 40px;
    background-color: ${({type:r})=>{switch(r){case"Expense":return"rgba(232, 80, 80, 0.1)";case"Error":return"rgba(29, 30, 33, 0.1)";case"Income":return"rgba(89, 177, 122, 0.1)";default:return"rgba(0, 0, 0, 0.05)"}}};
  
  color: ${({type:r})=>{switch(r){case"Expense":return"var(--cancel-color)";case"Error":return"var(--main-text-color)";case"Income":return"var(--main-color)";default:return"inherit"}}};

  @media screen and (min-width: 768px) {
    font-size: 14px;
`,A=t.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
`,D=t.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  color: ${({type:r})=>{switch(r){case"Expense":return"var(--cancel-color)";case"Error":return"var(--main-text-color)";case"Income":return"var(--main-color)";default:return"inherit"}}};

  @media screen and (min-width: 768px) {
    font-size: 16px;
`,I=()=>{const r=f(),i=w(n=>n.dashboard.transactions),[d,s]=a.useState(!0);return a.useEffect(()=>{(async()=>{try{await r(u()),s(!1)}catch{v.Notify.failure("Error fetching dashboard data"),s(!1)}})()},[r]),e.jsx(E,{children:e.jsxs(C,{children:[e.jsx($,{children:"Income/Expenses"}),e.jsx(S,{children:e.jsxs(l,{children:[e.jsx(x,{children:"Today"}),e.jsx(x,{}),e.jsx(x,{})]})}),e.jsx(k,{children:d?e.jsx(l,{children:e.jsx(j,{colSpan:"3",style:{textAlign:"center"},children:e.jsx(y,{})})}):i.map(n=>e.jsxs(l,{children:[e.jsx(j,{type:n.type,children:e.jsx("span",{children:n.type})}),e.jsx(A,{children:n.name}),e.jsx(D,{type:n.type,children:n.amount})]},n._id))})]})})},B=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 630px;
  }
`,R=t.table`
  background-color: var(--background-color);
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    width: 630px;
    height: 512px;
  }
`,_=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,H=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,L=t.tbody``,p=t.tr``,h=t.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,o=t.td`
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
`,N=()=>{const r=f(),i=w(n=>n.dashboard.recentCustomers),[d,s]=a.useState(!0);return a.useEffect(()=>{(async()=>{try{await r(u()),s(!1)}catch{v.Notify.failure("Error fetching recent customers"),s(!1)}})()},[r]),e.jsx(B,{children:e.jsxs(R,{children:[e.jsx(_,{children:"Recent Customers"}),e.jsx(H,{children:e.jsxs(p,{children:[e.jsx(h,{children:"Name"}),e.jsx(h,{children:"Email"}),e.jsx(h,{children:"Spent"})]})}),e.jsx(L,{children:d?e.jsx(p,{children:e.jsx(o,{colSpan:"3",style:{textAlign:"center"},children:e.jsx(y,{})})}):i.map(n=>e.jsxs(p,{children:[e.jsx(o,{children:n.name}),e.jsx(o,{children:n.email}),e.jsx(o,{children:n.spent})]},n._id))})]})})},P=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;
`,m=t.div`
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
`,g=t.span`
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
`,b=t.span`
  font-size: 16px;
  font-weight: bold;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,W=()=>{const r=f(),{totalProducts:i,totalSuppliers:d,totalCustomers:s}=w(n=>n.dashboard);return a.useEffect(()=>{r(u())},[r]),e.jsxs(P,{children:[e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`${c}#icon-coins`})}),"All products"]}),e.jsx(b,{children:i})]}),e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`${c}#icon-users`})}),"All suppliers"]}),e.jsx(b,{children:d})]}),e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`${c}#icon-users`})}),"All customers"]}),e.jsx(b,{children:s})]})]})},V=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 20px;
  }
`,G=()=>e.jsxs(z,{children:[e.jsx(W,{}),e.jsxs(V,{children:[e.jsx(N,{}),e.jsx(I,{})]})]});export{G as default};
