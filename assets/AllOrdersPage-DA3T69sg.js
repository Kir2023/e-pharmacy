import{p as t,r as c,j as e,c as j,C as P}from"./index-CY38vA15.js";import{P as C,u as O,U as v}from"./useFilter-BurlidOU.js";const y=t.div`
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
`,S=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,T=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
`,U=t.tbody``,h=t.tr``,s=t.th`
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
`,A=t.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,D=({filter:n})=>{const[i,m]=c.useState([]),[l,g]=c.useState(1),o=5;c.useEffect(()=>{(async()=>{try{const d=await j.get("https://e-pharmacy-backend-ez9m.onrender.com/api/orders");m(d.data)}catch(d){console.error("Error fetching orders:",d)}})()},[]);const u=r=>{const d={month:"long",day:"numeric",year:"numeric"};return new Date(r).toLocaleDateString("en-US",d)},x=n?i.filter(r=>r.name.toLowerCase().includes(n.toLowerCase())):i,p=l*o,f=p-o,b=x.slice(f,p),w=r=>g(r);return e.jsxs(y,{children:[e.jsxs(z,{children:[e.jsx(S,{children:"All orders"}),e.jsx(T,{children:e.jsxs(h,{children:[e.jsx(s,{children:"User Info"}),e.jsx(s,{children:"Address"}),e.jsx(s,{children:"Products"}),e.jsx(s,{children:"Order date"}),e.jsx(s,{children:"Price"}),e.jsx(s,{children:"Status"})]})}),e.jsx(U,{children:b.map(r=>e.jsxs(h,{children:[e.jsx(a,{children:e.jsxs(k,{children:[e.jsx(A,{src:r.photo,alt:r.name}),r.name]})}),e.jsx(a,{children:r.address}),e.jsx(a,{children:r.products}),e.jsx(a,{children:u(r.order_date)}),e.jsx(a,{children:r.price}),e.jsx(a,{type:r.status,children:e.jsx("span",{children:r.status})})]},r._id))})]}),e.jsx(C,{totalItems:x.length,itemsPerPage:o,currentPage:l,paginate:w})]})},H=()=>{const{filter:n,handleFilter:i}=O();return e.jsxs(P,{children:[e.jsx(v,{handleFilter:i,placeholder:"User Name"}),e.jsx(D,{filter:n})]})};export{H as default};
