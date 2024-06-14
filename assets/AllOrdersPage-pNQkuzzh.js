import{p as t,a as C,b as v,r as c,j as e,c as O,C as y}from"./index-BhDmYLhS.js";import{P as S,u as T,U as D}from"./useFilter-DHxwx7ml.js";import{T as z}from"./TableLoader-B9ofIuCv.js";const A=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`,L=t.table`
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
`,U=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,k=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
`,F=t.tbody``,l=t.tr``,a=t.th`
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,s=t.td`
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
`,E=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`,H=t.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,I=({filter:n})=>{const d=C(),x=v(r=>r.orders.items),[p,u]=c.useState(1),[h,m]=c.useState(!0),i=5;c.useEffect(()=>{(async()=>{m(!0),await d(O()),m(!1)})()},[d]);const f=r=>{const P={month:"long",day:"numeric",year:"numeric"};return new Date(r).toLocaleDateString("en-US",P)},o=n?x.filter(r=>r.name.toLowerCase().includes(n.toLowerCase())):x,g=p*i,b=g-i,j=o.slice(b,g),w=r=>u(r);return e.jsxs(A,{children:[e.jsxs(L,{children:[e.jsx(U,{children:"All orders"}),e.jsx(k,{children:e.jsxs(l,{children:[e.jsx(a,{children:"User Info"}),e.jsx(a,{children:"Address"}),e.jsx(a,{children:"Products"}),e.jsx(a,{children:"Order date"}),e.jsx(a,{children:"Price"}),e.jsx(a,{children:"Status"})]})}),e.jsx(F,{children:h?e.jsx(l,{children:e.jsx(s,{colSpan:"6",style:{textAlign:"center"},children:e.jsx(z,{})})}):j.map(r=>e.jsxs(l,{children:[e.jsx(s,{children:e.jsxs(E,{children:[e.jsx(H,{src:r.photo,alt:r.name}),r.name]})}),e.jsx(s,{children:r.address}),e.jsx(s,{children:r.products}),e.jsx(s,{children:f(r.order_date)}),e.jsx(s,{children:r.price}),e.jsx(s,{type:r.status,children:e.jsx("span",{children:r.status})})]},r._id))})]}),o.length>i&&!h&&e.jsx(S,{totalItems:o.length,itemsPerPage:i,currentPage:p,paginate:w})]})},B=()=>{const{filter:n,handleFilter:d}=T();return e.jsxs(y,{children:[e.jsx(D,{handleFilter:d,placeholder:"User Name"}),e.jsx(I,{filter:n})]})};export{B as default};
