import{p as t,j as e,r as x,b as j,C as v}from"./index-CvTBbUrB.js";import{U as C}from"./Filter-v7K2do9T.js";const P=t.div`
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
`,O=t.caption`
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
`,S=t.tbody``,g=t.tr``,d=t.th`
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,o=t.td`
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
    background-color: ${({type:s})=>{switch(s){case"Cancelled":return"rgba(232, 80, 80, 0.1)";case"Shipped":return"rgba(29, 30, 33, 0.1)";case"Completed":return"rgba(89, 177, 122, 0.1)";case"Processing":return"rgba(112, 166, 232, 0.1)";case"Pending":return"rgba(247, 144, 66, 0.1)";case"Confirmed":return"rgba(128, 89, 228, 0.1)";case"Delivered":return"rgba(0, 255, 0, 0.1)";default:return"rgba(0, 0, 0, 0.05)"}}};

  color: ${({type:s})=>{switch(s){case"Completed":return"var(--main-color)";case"Confirmed":return"var(--confirmed-color)";case"Pending":return"var(--pending-color)";case"Cancelled":return"var(--cancel-color)";case"Processing":return"var(--processing-color)";case"Shipped":return"var(--main-text-color)";case"Delivered":return"#00ff00";default:return"inherit"}}};

  &:last-child {
    border-right: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,z=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`,T=t.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,D=t.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 614px;
  }

  @media screen and (min-width: 1440px) {
    width: 1280px;
  }
`,U=t.button`
  width: 9.5px;
  height: 9.5px;
  background-color: #e7f1ed;
  border: none;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;

  &.active {
    background-color: var(--main-color);
  }

  &:hover {
    background-color: var(--active-color);
  }
`,A=({totalItems:s,itemsPerPage:a,currentPage:c,paginate:i})=>{const p=[];for(let n=1;n<=Math.ceil(s/a);n++)p.push(n);return e.jsx(D,{children:p.map(n=>e.jsx(U,{className:c===n?"active":"",onClick:()=>i(n)},n))})},E=({filter:s})=>{const[a,c]=x.useState([]),[i,p]=x.useState(1),n=5;x.useEffect(()=>{(async()=>{try{const l=await j.get("https://e-pharmacy-backend-ez9m.onrender.com/api/orders");c(l.data)}catch(l){console.error("Error fetching orders:",l)}})()},[]);const u=r=>{const l={month:"long",day:"numeric",year:"numeric"};return new Date(r).toLocaleDateString("en-US",l)},h=s?a.filter(r=>r.name.toLowerCase().includes(s.toLowerCase())):a,m=i*n,f=m-n,b=h.slice(f,m),w=r=>p(r);return e.jsxs(P,{children:[e.jsxs(y,{children:[e.jsx(O,{children:"All orders"}),e.jsx(k,{children:e.jsxs(g,{children:[e.jsx(d,{children:"User Info"}),e.jsx(d,{children:"Address"}),e.jsx(d,{children:"Products"}),e.jsx(d,{children:"Order date"}),e.jsx(d,{children:"Price"}),e.jsx(d,{children:"Status"})]})}),e.jsx(S,{children:b.map(r=>e.jsxs(g,{children:[e.jsx(o,{children:e.jsxs(z,{children:[e.jsx(T,{src:r.photo,alt:r.name}),r.name]})}),e.jsx(o,{children:r.address}),e.jsx(o,{children:r.products}),e.jsx(o,{children:u(r.order_date)}),e.jsx(o,{children:r.price}),e.jsx(o,{type:r.status,children:e.jsx("span",{children:r.status})})]},r._id))})]}),e.jsx(A,{totalItems:h.length,itemsPerPage:n,currentPage:i,paginate:w})]})},H=()=>{const[s,a]=x.useState(""),c=i=>{a(i)};return e.jsxs(v,{children:[e.jsx(C,{handleFilter:c,placeholder:"User Name"}),e.jsx(E,{filter:s})]})};export{H as default};
