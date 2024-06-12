import{p as s,r as l,j as e,b as j,C}from"./index-DziqZbVS.js";import{P,U as y}from"./Filter-B1tZesti.js";const z=s.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`,T=s.table`
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
`,U=s.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,D=s.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,E=s.tbody``,m=s.tr``,r=s.th`
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
`,S=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`,F=s.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,L=({filter:a})=>{const[d,x]=l.useState([]),[o,g]=l.useState(1),c=5;l.useEffect(()=>{(async()=>{try{const n=await j.get("https://e-pharmacy-backend-ez9m.onrender.com/api/customers");x(n.data)}catch(n){console.error("Error fetching customers:",n)}})()},[]);const f=t=>{const n={month:"long",day:"numeric",year:"numeric"};return new Date(t).toLocaleDateString("en-US",n)},h=a?d.filter(t=>t.name.toLowerCase().includes(a.toLowerCase())):d,p=o*c,b=p-c,w=h.slice(b,p),u=t=>g(t);return e.jsxs(z,{children:[e.jsxs(T,{children:[e.jsx(U,{children:"Customers data"}),e.jsx(D,{children:e.jsxs(m,{children:[e.jsx(r,{children:"User info"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Adress"}),e.jsx(r,{children:"Phone"}),e.jsx(r,{children:"Register date"})]})}),e.jsx(E,{children:w.map(t=>e.jsxs(m,{children:[e.jsx(i,{children:e.jsxs(S,{children:[e.jsx(F,{src:t.photo,alt:t.name}),t.name]})}),e.jsx(i,{children:t.email}),e.jsx(i,{children:t.address}),e.jsx(i,{children:t.phone}),e.jsx(i,{children:f(t.register_date)})]},t._id))})]}),h.length>c&&e.jsx(P,{totalItems:h.length,itemsPerPage:c,currentPage:o,paginate:u})]})},A=()=>{const[a,d]=l.useState(""),x=o=>{d(o)};return e.jsxs(C,{children:[e.jsx(y,{handleFilter:x,placeholder:"User Name"}),e.jsx(L,{filter:a})]})};export{A as default};
