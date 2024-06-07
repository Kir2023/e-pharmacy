import{p as t,j as e,r as x,b as j,C as v}from"./index-D1lS88Pl.js";const C=t.div`
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
`,P=t.caption`
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
`,z=t.tbody``,m=t.tr``,c=t.th`
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,l=t.td`
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
    background-color: ${({type:i})=>{switch(i){case"Cancelled":return"rgba(232, 80, 80, 0.1)";case"Shipped":return"rgba(29, 30, 33, 0.1)";case"Completed":return"rgba(89, 177, 122, 0.1)";case"Processing":return"rgba(112, 166, 232, 0.1)";case"Pending":return"rgba(247, 144, 66, 0.1)";case"Confirmed":return"rgba(128, 89, 228, 0.1)";case"Delivered":return"rgba(0, 255, 0, 0.1)";default:return"rgba(0, 0, 0, 0.05)"}}};

  color: ${({type:i})=>{switch(i){case"Completed":return"var(--main-color)";case"Confirmed":return"var(--confirmed-color)";case"Pending":return"var(--pending-color)";case"Cancelled":return"var(--cancel-color)";case"Processing":return"var(--processing-color)";case"Shipped":return"var(--main-text-color)";case"Delivered":return"#00ff00";default:return"inherit"}}};

  &:last-child {
    border-right: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,O=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`,S=t.img`
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
`,T=t.button`
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
`,N=({totalItems:i,itemsPerPage:o,currentPage:a,paginate:s})=>{const d=[];for(let n=1;n<=Math.ceil(i/o);n++)d.push(n);return e.jsx(D,{children:d.map(n=>e.jsx(T,{className:a===n?"active":"",onClick:()=>s(n)},n))})},U=({filter:i})=>{const[o,a]=x.useState([]),[s,d]=x.useState(1),n=5;x.useEffect(()=>{(async()=>{try{const p=await j.get("https://e-pharmacy-backend-ez9m.onrender.com/api/orders");a(p.data)}catch(p){console.error("Error fetching orders:",p)}})()},[]);const u=r=>{const p={month:"long",day:"numeric",year:"numeric"};return new Date(r).toLocaleDateString("en-US",p)},h=i?o.filter(r=>r.name.toLowerCase().includes(i.toLowerCase())):o,g=s*n,f=g-n,b=h.slice(f,g),w=r=>d(r);return e.jsxs(C,{children:[e.jsxs(y,{children:[e.jsx(P,{children:"All orders"}),e.jsx(k,{children:e.jsxs(m,{children:[e.jsx(c,{children:"User Info"}),e.jsx(c,{children:"Address"}),e.jsx(c,{children:"Products"}),e.jsx(c,{children:"Order date"}),e.jsx(c,{children:"Price"}),e.jsx(c,{children:"Status"})]})}),e.jsx(z,{children:b.map(r=>e.jsxs(m,{children:[e.jsx(l,{children:e.jsxs(O,{children:[e.jsx(S,{src:r.photo,alt:r.name}),r.name]})}),e.jsx(l,{children:r.address}),e.jsx(l,{children:r.products}),e.jsx(l,{children:u(r.order_date)}),e.jsx(l,{children:r.price}),e.jsx(l,{type:r.status,children:e.jsx("span",{children:r.status})})]},r._id))})]}),e.jsx(N,{totalItems:h.length,itemsPerPage:n,currentPage:s,paginate:w})]})},A=t.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  max-width: 300px;
  margin: 20px 0;
`,E=t.input`
  width: 215px;
  height: 44px;
  padding: 13px 18px;
  background-color: #ffffff;
  border: 1px solid rgba(29, 30, 33, 0.1);
  box-shadow: 0px -1px 5px rgba(71, 71, 71, 0.05);
  border-radius: 60px;
  font-size: 14px;
  color: var(--main-text-color);
  box-sizing: border-box;

  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
    font-size: 12px;
    padding: 13px 18px;
  }

  @media screen and (min-width: 768px) {
    width: 224px;
  }
`,F=t.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 30px;
  background-color: var(--main-color);
  color: #ffffff;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: var(--active-color);
  }

  svg {
    fill: none;
    stroke: currentColor;
    width: 14px;
    height: 14px;
  }
`;t.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  width: 100%;
`;t.li`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 4px;
  font-size: 14px;
`;const I=({handleFilter:i})=>{const[o,a]=x.useState(""),s=n=>{a(n.target.value)},d=n=>{n.key==="Enter"&&i(o)};return e.jsxs(A,{children:[e.jsx(E,{type:"text",value:o,onChange:s,onKeyDown:d,placeholder:"User Name"}),e.jsxs(F,{onClick:()=>i(o),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-filter"})}),"Filter"]})]})},H=()=>{const[i,o]=x.useState(""),a=s=>{o(s)};return e.jsxs(v,{children:[e.jsx(I,{handleFilter:a}),e.jsx(U,{filter:i})]})};export{H as default};
