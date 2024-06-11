import{p as t,r as i,j as e,b as f,L as j,s as o,C as v}from"./index-DoQj_Gun.js";const y=t.div`
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
`,E=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 14px;
`,C=t.tbody``,b=t.tr``,c=t.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`,$=t.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  
  span {
    display: inline-block;
    padding: 4px 13.5px;
    border-radius: 40px;
    background-color: ${({type:s})=>{switch(s){case"Expense":return"rgba(232, 80, 80, 0.1)";case"Error":return"rgba(29, 30, 33, 0.1)";case"Income":return"rgba(89, 177, 122, 0.1)";default:return"rgba(0, 0, 0, 0.05)"}}};
  
  color: ${({type:s})=>{switch(s){case"Expense":return"var(--cancel-color)";case"Error":return"var(--main-text-color)";case"Income":return"var(--main-color)";default:return"inherit"}}};

  @media screen and (min-width: 768px) {
    font-size: 14px;
`,k=t.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
`,S=t.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  color: ${({type:s})=>{switch(s){case"Expense":return"var(--cancel-color)";case"Error":return"var(--main-text-color)";case"Income":return"var(--main-color)";default:return"inherit"}}};

  @media screen and (min-width: 768px) {
    font-size: 16px;
`,I=()=>{const[s,a]=i.useState([]);return i.useEffect(()=>{(async()=>{try{const n=await f.get("https://e-pharmacy-backend-ez9m.onrender.com/api/dashboard");a(n.data.recentTransactions)}catch(n){console.error("Error fetching transactions:",n)}})()},[]),e.jsx(y,{children:e.jsxs(T,{children:[e.jsx(z,{children:"Income/Expenses"}),e.jsx(E,{children:e.jsxs(b,{children:[e.jsx(c,{children:"Today"}),e.jsx(c,{}),e.jsx(c,{})]})}),e.jsx(C,{children:s.map(r=>e.jsxs(b,{children:[e.jsx($,{type:r.type,children:e.jsx("span",{children:r.type})}),e.jsx(k,{children:r.name}),e.jsx(S,{type:r.type,children:r.amount})]},r._id))})]})})},B=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 630px;
  }
`,R=t.table`
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
`,A=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,D=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,H=t.tbody``,w=t.tr``,l=t.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,x=t.td`
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
`,L=()=>{const[s,a]=i.useState([]);return i.useEffect(()=>{(async()=>{try{const n=await f.get("https://e-pharmacy-backend-ez9m.onrender.com/api/dashboard");a(n.data.recentCustomers)}catch(n){console.error("Error fetching customers:",n)}})()},[]),e.jsx(B,{children:e.jsxs(R,{children:[e.jsx(A,{children:"Recent Customers"}),e.jsx(D,{children:e.jsxs(w,{children:[e.jsx(l,{children:"Name"}),e.jsx(l,{children:"Email"}),e.jsx(l,{children:"Spent"})]})}),e.jsx(H,{children:s.map(r=>e.jsxs(w,{children:[e.jsx(x,{children:r.name}),e.jsx(x,{children:r.email}),e.jsx(x,{children:r.spent})]},r._id))})]})})},N=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;
`,p=t.div`
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
`,h=t.span`
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
`,m=t.span`
  font-size: 16px;
  font-weight: bold;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,P=()=>{const[s,a]=i.useState(null),[r,n]=i.useState(!0),[g,u]=i.useState(null);return i.useEffect(()=>{(async()=>{try{const d=await f.get("https://e-pharmacy-backend-ez9m.onrender.com/api/dashboard");a(d.data),console.log(d.data)}catch(d){u(d.message)}finally{n(!1)}})()},[]),r?e.jsx(j,{}):g?e.jsxs("div",{children:["Error: ",g]}):e.jsxs(N,{children:[e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`${o}#icon-coins`})}),"All products"]}),e.jsx(m,{children:s.totalProducts})]}),e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`${o}#icon-users`})}),"All suppliers"]}),e.jsx(m,{children:s.totalSuppliers})]}),e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`${o}#icon-users`})}),"All customers"]}),e.jsx(m,{children:s.totalCustomers})]})]})},W=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 20px;
  }
`,q=()=>e.jsxs(v,{children:[e.jsx(P,{}),e.jsxs(W,{children:[e.jsx(L,{}),e.jsx(I,{})]})]});export{q as default};
