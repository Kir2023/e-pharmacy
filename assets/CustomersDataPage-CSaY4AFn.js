import{p as s,a as u,b as C,r as p,V as P,j as e,C as T}from"./index-Cbn7bQVQ.js";import{P as z,u as D,U}from"./useFilter-D6M2GXoT.js";const y=s.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`,E=s.table`
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
`,F=s.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,L=s.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,S=s.tbody``,h=s.tr``,n=s.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,i=s.td`
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
`,v=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`,R=s.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,k=({filter:d})=>{const r=u(),c=C(t=>t.customers.items),[l,m]=p.useState(1),a=5;p.useEffect(()=>{r(P())},[r]);const g=t=>{const j={month:"long",day:"numeric",year:"numeric"};return new Date(t).toLocaleDateString("en-US",j)},o=d?c.filter(t=>t.name.toLowerCase().includes(d.toLowerCase())):c,x=l*a,f=x-a,b=o.slice(f,x),w=t=>m(t);return e.jsxs(y,{children:[e.jsxs(E,{children:[e.jsx(F,{children:"Customers data"}),e.jsx(L,{children:e.jsxs(h,{children:[e.jsx(n,{children:"User info"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Adress"}),e.jsx(n,{children:"Phone"}),e.jsx(n,{children:"Register date"})]})}),e.jsx(S,{children:b.map(t=>e.jsxs(h,{children:[e.jsx(i,{children:e.jsxs(v,{children:[e.jsx(R,{src:t.photo,alt:t.name}),t.name]})}),e.jsx(i,{children:t.email}),e.jsx(i,{children:t.address}),e.jsx(i,{children:t.phone}),e.jsx(i,{children:g(t.register_date)})]},t._id))})]}),o.length>a&&e.jsx(z,{totalItems:o.length,itemsPerPage:a,currentPage:l,paginate:w})]})},O=()=>{const{filter:d,handleFilter:r}=D();return e.jsxs(T,{children:[e.jsx(U,{handleFilter:r,placeholder:"User Name"}),e.jsx(k,{filter:d})]})};export{O as default};
