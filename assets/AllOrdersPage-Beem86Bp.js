import{p as t,r as c,j as e,b as j,C as P}from"./index-BT54QvEX.js";import{P as C,U as O}from"./Filter-DBDDvijB.js";const v=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`,y=t.table`
  background-color: #ffffff;
  width: 671px;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 960px;
  }

  @media screen and (min-width: 1440px) {
    width: 1280px;
  }
`,S=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,z=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
`,T=t.tbody``,m=t.tr``,s=t.th`
  padding: 12px;
  text-align: left;
  font-size: 14px;
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

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  span {
    display: inline-block;
    padding: 4px 13.5px;
    border-radius: 40px;
    background-color: ${({type:n})=>{switch(n){case"Cancelled":return"rgba(232, 80, 80, 0.1)";case"Shipped":return"rgba(29, 30, 33, 0.1)";case"Completed":return"rgba(89, 177, 122, 0.1)";case"Processing":return"rgba(112, 166, 232, 0.1)";case"Pending":return"rgba(247, 144, 66, 0.1)";case"Confirmed":return"rgba(128, 89, 228, 0.1)";case"Delivered":return"rgba(0, 255, 0, 0.1)";default:return"rgba(0, 0, 0, 0.05)"}}};

  color: ${({type:n})=>{switch(n){case"Completed":return"var(--main-color)";case"Confirmed":return"var(--confirmed-color)";case"Pending":return"var(--pending-color)";case"Cancelled":return"var(--cancel-color)";case"Processing":return"var(--processing-color)";case"Shipped":return"var(--main-text-color)";case"Delivered":return"#00ff00";default:return"inherit"}}};

  &:last-child {
    border-right: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,U=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`,k=t.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,A=({filter:n})=>{const[i,l]=c.useState([]),[o,g]=c.useState(1),x=5;c.useEffect(()=>{(async()=>{try{const d=await j.get("https://e-pharmacy-backend-ez9m.onrender.com/api/orders");l(d.data)}catch(d){console.error("Error fetching orders:",d)}})()},[]);const u=r=>{const d={month:"long",day:"numeric",year:"numeric"};return new Date(r).toLocaleDateString("en-US",d)},p=n?i.filter(r=>r.name.toLowerCase().includes(n.toLowerCase())):i,h=o*x,f=h-x,b=p.slice(f,h),w=r=>g(r);return e.jsxs(v,{children:[e.jsxs(y,{children:[e.jsx(S,{children:"All orders"}),e.jsx(z,{children:e.jsxs(m,{children:[e.jsx(s,{children:"User Info"}),e.jsx(s,{children:"Address"}),e.jsx(s,{children:"Products"}),e.jsx(s,{children:"Order date"}),e.jsx(s,{children:"Price"}),e.jsx(s,{children:"Status"})]})}),e.jsx(T,{children:b.map(r=>e.jsxs(m,{children:[e.jsx(a,{children:e.jsxs(U,{children:[e.jsx(k,{src:r.photo,alt:r.name}),r.name]})}),e.jsx(a,{children:r.address}),e.jsx(a,{children:r.products}),e.jsx(a,{children:u(r.order_date)}),e.jsx(a,{children:r.price}),e.jsx(a,{type:r.status,children:e.jsx("span",{children:r.status})})]},r._id))})]}),e.jsx(C,{totalItems:p.length,itemsPerPage:x,currentPage:o,paginate:w})]})},L=()=>{const[n,i]=c.useState(""),l=o=>{i(o)};return e.jsxs(P,{children:[e.jsx(O,{handleFilter:l,placeholder:"User Name"}),e.jsx(A,{filter:n})]})};export{L as default};
