import{p as s,r as n,j as e,b as f,L as b,s as c,C as u}from"./index-W33_sd2r.js";const w=s.div`
  margin-top: 20px;
`,v=s.table`
  width: 100%;
  border-collapse: collapse;

  caption {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  th, td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`,y=()=>{const[o,a]=n.useState([]);return n.useEffect(()=>{(async()=>{try{const r=await f.get("https://e-pharmacy-backend-ez9m.onrender.com/api/dashboard");a(r.data.recentTransactions)}catch(r){console.error("Error fetching transactions:",r)}})()},[]),e.jsx(w,{children:e.jsxs(v,{children:[e.jsx("caption",{children:"Income/Expenses"}),e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{children:"Today"})})}),e.jsx("tbody",{children:o.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.type}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.amount})]},t._id))})]})})},T=s.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
`,C=s.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`,E=s.thead`
  background-color: #f7f8fa;
  color: #333;
`,S=s.tbody`
  background-color: #fff;
`,g=s.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`,d=s.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`,l=s.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,k=()=>{const[o,a]=n.useState([]);return n.useEffect(()=>{(async()=>{try{const r=await f.get("https://e-pharmacy-backend-ez9m.onrender.com/api/dashboard");a(r.data.recentCustomers)}catch(r){console.error("Error fetching customers:",r)}})()},[]),e.jsx(T,{children:e.jsxs(C,{children:[e.jsx("caption",{children:"Recent Customers"}),e.jsx(E,{children:e.jsxs(g,{children:[e.jsx(d,{children:"Name"}),e.jsx(d,{children:"Email"}),e.jsx(d,{children:"Spent"})]})}),e.jsx(S,{children:o.map(t=>e.jsxs(g,{children:[e.jsx(l,{children:t.name}),e.jsx(l,{children:t.email}),e.jsx(l,{children:t.spent})]},t._id))})]})})},z=s.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;
`,x=s.div`
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
`,h=s.span`
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
`,p=s.span`
  font-size: 16px;
  font-weight: bold;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,$=()=>{const[o,a]=n.useState(null),[t,r]=n.useState(!0),[m,j]=n.useState(null);return n.useEffect(()=>{(async()=>{try{const i=await f.get("https://e-pharmacy-backend-ez9m.onrender.com/api/dashboard");a(i.data),console.log(i.data)}catch(i){j(i.message)}finally{r(!1)}})()},[]),t?e.jsx(b,{}):m?e.jsxs("div",{children:["Error: ",m]}):e.jsxs(z,{children:[e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`${c}#icon-coins`})}),"All products"]}),e.jsx(p,{children:o.totalProducts})]}),e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`${c}#icon-users`})}),"All suppliers"]}),e.jsx(p,{children:o.totalSuppliers})]}),e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`${c}#icon-users`})}),"All customers"]}),e.jsx(p,{children:o.totalCustomers})]})]})},L=()=>e.jsxs(u,{children:[e.jsx($,{}),e.jsx(k,{}),e.jsx(y,{})]});export{L as default};
