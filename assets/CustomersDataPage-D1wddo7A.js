import{p as s,a as P,b as y,r as c,j as e,V as T,n as D,C as z}from"./index-BhDmYLhS.js";import{P as E,u as L,U as S}from"./useFilter-DHxwx7ml.js";import{T as U}from"./TableLoader-B9ofIuCv.js";const _=s.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`,A=s.table`
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
`,v=s.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,N=s.tbody``,l=s.tr``,i=s.th`
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
`,R=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`,k=s.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,H=({filter:a})=>{const r=P(),x=y(t=>t.customers.items),[h,g]=c.useState(1),[u,p]=c.useState(!0),d=5;c.useEffect(()=>{(async()=>{try{await r(T()),p(!1)}catch{D.Notify.failure("Error fetching customers"),p(!1)}})()},[r]);const b=t=>{const f={month:"long",day:"numeric",year:"numeric"};return new Date(t).toLocaleDateString("en-US",f)},o=a?x.filter(t=>t.name.toLowerCase().includes(a.toLowerCase())):x,m=h*d,j=m-d,w=o.slice(j,m),C=t=>g(t);return e.jsxs(_,{children:[e.jsxs(A,{children:[e.jsx(F,{children:"Customers data"}),e.jsx(v,{children:e.jsxs(l,{children:[e.jsx(i,{children:"User info"}),e.jsx(i,{children:"Email"}),e.jsx(i,{children:"Address"}),e.jsx(i,{children:"Phone"}),e.jsx(i,{children:"Register date"})]})}),e.jsx(N,{children:u?e.jsx(l,{children:e.jsx(n,{colSpan:"5",style:{textAlign:"center"},children:e.jsx(U,{})})}):w.map(t=>e.jsxs(l,{children:[e.jsx(n,{children:e.jsxs(R,{children:[e.jsx(k,{src:t.photo,alt:t.name}),t.name]})}),e.jsx(n,{children:t.email}),e.jsx(n,{children:t.address}),e.jsx(n,{children:t.phone}),e.jsx(n,{children:b(t.register_date)})]},t._id))})]}),o.length>d&&e.jsx(E,{totalItems:o.length,itemsPerPage:d,currentPage:h,paginate:C})]})},W=()=>{const{filter:a,handleFilter:r}=L();return e.jsxs(z,{children:[e.jsx(S,{handleFilter:r,placeholder:"User Name"}),e.jsx(H,{filter:a})]})};export{W as default};
