import{p as s,a as P,b as y,r as o,j as e,V as T,n as D,C as E}from"./index-DDfpZsUr.js";import{P as z,u as L,U as S}from"./useFilter-BxCNmLfH.js";import{T as U}from"./TableLoader-DlmeU0NO.js";const _=s.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`,v=s.table`
  background-color: var(--background-color);
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
`,A=s.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,F=s.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,k=s.tbody``,l=s.tr``,a=s.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,n=s.td`
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
`,N=s.div`
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
`,H=({filter:i})=>{const r=P(),x=y(t=>t.customers.items),[h,p]=o.useState(1),[u,m]=o.useState(!0),d=5;o.useEffect(()=>{(async()=>{try{await r(T()),m(!1)}catch{D.Notify.failure("Error fetching customers"),m(!1)}})()},[r]),o.useEffect(()=>{p(1)},[i]);const b=t=>{const f={month:"long",day:"numeric",year:"numeric"};return new Date(t).toLocaleDateString("en-US",f)},c=i?x.filter(t=>t.name.toLowerCase().includes(i.toLowerCase())):x,g=h*d,j=g-d,w=c.slice(j,g),C=t=>p(t);return e.jsxs(_,{children:[e.jsxs(v,{children:[e.jsx(A,{children:"Customers data"}),e.jsx(F,{children:e.jsxs(l,{children:[e.jsx(a,{children:"User info"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Address"}),e.jsx(a,{children:"Phone"}),e.jsx(a,{children:"Register date"})]})}),e.jsx(k,{children:u?e.jsx(l,{children:e.jsx(n,{colSpan:"5",style:{textAlign:"center"},children:e.jsx(U,{})})}):w.map(t=>e.jsxs(l,{children:[e.jsx(n,{children:e.jsxs(N,{children:[e.jsx(R,{src:t.photo,alt:t.name}),t.name]})}),e.jsx(n,{children:t.email}),e.jsx(n,{children:t.address}),e.jsx(n,{children:t.phone}),e.jsx(n,{children:b(t.register_date)})]},t._id))})]}),c.length>d&&e.jsx(z,{totalItems:c.length,itemsPerPage:d,currentPage:h,paginate:C})]})},W=()=>{const{filter:i,handleFilter:r}=L();return e.jsxs(E,{children:[e.jsx(S,{handleFilter:r,placeholder:"User Name"}),e.jsx(H,{filter:i})]})};export{W as default};
