import{p as n,r as l,j as e,b as h,C as g}from"./index-PGoMyuKz.js";const f=n.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 768px) {
    max-width: 630px;
  }
`,m=n.table`
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
`,u=n.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,b=n.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
`,w=n.tbody``,x=n.tr``,i=n.th`
  padding: 12px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,d=n.td`
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
    background-color: ${({type:t})=>{switch(t){case"Cancelled":return"rgba(232, 80, 80, 0.1)";case"Shipped":return"rgba(29, 30, 33, 0.1)";case"Completed":return"rgba(89, 177, 122, 0.1)";case"Processing":return"rgba(112, 166, 232, 0.1)";case"Pending":return"rgba(247, 144, 66, 0.1)";case"Confirmed":return"rgba(128, 89, 228, 0.1)";case"Delivered":return"rgba(0, 255, 0, 0.1)";default:return"rgba(0, 0, 0, 0.05)"}}};

  color: ${({type:t})=>{switch(t){case"Completed":return"var(--main-color)";case"Confirmed":return"var(--confirmed-color)";case"Pending":return"var(--pending-color)";case"Cancelled":return"var(--cancel-color)";case"Processing":return"var(--processing-color)";case"Shipped":return"var(--main-text-color)";case"Delivered":return"#00ff00";default:return"inherit"}}};

  &:last-child {
    border-right: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,j=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`,v=n.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`,y=({filter:t})=>{const[s,o]=l.useState([]);l.useEffect(()=>{(async()=>{try{const c=await h.get("https://e-pharmacy-backend-ez9m.onrender.com/api/orders");o(c.data)}catch(c){console.error("Error fetching orders:",c)}})()},[]);const a=r=>{const c={month:"long",day:"numeric",year:"numeric"};return new Date(r).toLocaleDateString("en-US",c)},p=t?s.filter(r=>r.name.toLowerCase().includes(t.toLowerCase())):s;return e.jsx(f,{children:e.jsxs(m,{children:[e.jsx(u,{children:"All orders"}),e.jsx(b,{children:e.jsxs(x,{children:[e.jsx(i,{children:"User Info"}),e.jsx(i,{children:"Address"}),e.jsx(i,{children:"Products"}),e.jsx(i,{children:"Order date"}),e.jsx(i,{children:"Price"}),e.jsx(i,{children:"Status"})]})}),e.jsx(w,{children:p.map(r=>e.jsxs(x,{children:[e.jsx(d,{children:e.jsxs(j,{children:[e.jsx(v,{src:r.photo,alt:r.name}),r.name]})}),e.jsx(d,{children:r.address}),e.jsx(d,{children:r.products}),e.jsx(d,{children:a(r.order_date)}),e.jsx(d,{children:r.price}),e.jsx(d,{type:r.status,children:e.jsx("span",{children:r.status})})]},r._id))})]})})},C=n.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  max-width: 300px;
  margin: 20px 0;
`,z=n.input`
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
`,k=n.button`
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
`;n.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  width: 100%;
`;n.li`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 4px;
  font-size: 14px;
`;const P=({handleFilter:t})=>{const[s,o]=l.useState(""),a=r=>{o(r.target.value)},p=r=>{r.key==="Enter"&&t(s)};return e.jsxs(C,{children:[e.jsx(z,{type:"text",value:s,onChange:a,onKeyDown:p,placeholder:"User Name"}),e.jsxs(k,{onClick:()=>t(s),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-filter"})}),"Filter"]})]})},T=()=>{const[t,s]=l.useState(""),o=a=>{s(a)};return e.jsxs(g,{children:[e.jsx(P,{handleFilter:o}),e.jsx(y,{filter:t})]})};export{T as default};
