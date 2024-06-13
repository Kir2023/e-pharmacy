import{p as s,r as l,j as e,c as j,C}from"./index-CSjtoLoC.js";import{P,u as y,U as z}from"./useFilter-DrZ4YSvI.js";const T=s.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`,U=s.table`
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
`,D=s.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,E=s.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,F=s.tbody``,p=s.tr``,r=s.th`
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
`,L=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`,S=s.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,k=({filter:a})=>{const[d,m]=l.useState([]),[x,g]=l.useState(1),o=5;l.useEffect(()=>{(async()=>{try{const n=await j.get("https://e-pharmacy-backend-ez9m.onrender.com/api/customers");m(n.data)}catch(n){console.error("Error fetching customers:",n)}})()},[]);const f=t=>{const n={month:"long",day:"numeric",year:"numeric"};return new Date(t).toLocaleDateString("en-US",n)},c=a?d.filter(t=>t.name.toLowerCase().includes(a.toLowerCase())):d,h=x*o,b=h-o,u=c.slice(b,h),w=t=>g(t);return e.jsxs(T,{children:[e.jsxs(U,{children:[e.jsx(D,{children:"Customers data"}),e.jsx(E,{children:e.jsxs(p,{children:[e.jsx(r,{children:"User info"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Adress"}),e.jsx(r,{children:"Phone"}),e.jsx(r,{children:"Register date"})]})}),e.jsx(F,{children:u.map(t=>e.jsxs(p,{children:[e.jsx(i,{children:e.jsxs(L,{children:[e.jsx(S,{src:t.photo,alt:t.name}),t.name]})}),e.jsx(i,{children:t.email}),e.jsx(i,{children:t.address}),e.jsx(i,{children:t.phone}),e.jsx(i,{children:f(t.register_date)})]},t._id))})]}),c.length>o&&e.jsx(P,{totalItems:c.length,itemsPerPage:o,currentPage:x,paginate:w})]})},H=()=>{const{filter:a,handleFilter:d}=y();return e.jsxs(C,{children:[e.jsx(z,{handleFilter:d,placeholder:"User Name"}),e.jsx(k,{filter:a})]})};export{H as default};
