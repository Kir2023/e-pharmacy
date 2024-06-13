import{p as t,a as w,b as P,r as p,f as C,j as e,C as v}from"./index-D_AUEuKE.js";import{P as O,u as y,U as S}from"./useFilter-CU6qgTKm.js";const T=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`,z=t.table`
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
`,D=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,U=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
`,A=t.tbody``,h=t.tr``,s=t.th`
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
`,k=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`,F=t.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,L=({filter:n})=>{const d=w(),c=P(r=>r.orders.items),[l,m]=p.useState(1),i=5;p.useEffect(()=>{d(C())},[d]);const g=r=>{const j={month:"long",day:"numeric",year:"numeric"};return new Date(r).toLocaleDateString("en-US",j)},o=n?c.filter(r=>r.name.toLowerCase().includes(n.toLowerCase())):c,x=l*i,u=x-i,f=o.slice(u,x),b=r=>m(r);return e.jsxs(T,{children:[e.jsxs(z,{children:[e.jsx(D,{children:"All orders"}),e.jsx(U,{children:e.jsxs(h,{children:[e.jsx(s,{children:"User Info"}),e.jsx(s,{children:"Address"}),e.jsx(s,{children:"Products"}),e.jsx(s,{children:"Order date"}),e.jsx(s,{children:"Price"}),e.jsx(s,{children:"Status"})]})}),e.jsx(A,{children:f.map(r=>e.jsxs(h,{children:[e.jsx(a,{children:e.jsxs(k,{children:[e.jsx(F,{src:r.photo,alt:r.name}),r.name]})}),e.jsx(a,{children:r.address}),e.jsx(a,{children:r.products}),e.jsx(a,{children:g(r.order_date)}),e.jsx(a,{children:r.price}),e.jsx(a,{type:r.status,children:e.jsx("span",{children:r.status})})]},r._id))})]}),o.length>i&&e.jsx(O,{totalItems:o.length,itemsPerPage:i,currentPage:l,paginate:b})]})},N=()=>{const{filter:n,handleFilter:d}=y();return e.jsxs(v,{children:[e.jsx(S,{handleFilter:d,placeholder:"User Name"}),e.jsx(L,{filter:n})]})};export{N as default};
