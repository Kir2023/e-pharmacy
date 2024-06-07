import{p as t,r as x,j as e,b as v,C as w}from"./index-DnCQPHzn.js";const y=t.div`
  margin: 20px;
  overflow-x: auto;
`,k=t.table`
  width: 100%;
  border-collapse: collapse;
`,C=t.thead`
  background-color: #f5f5f5;
`,O=t.tbody`
  background-color: #fff;
`,f=t.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`,i=t.th`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`,d=t.td`
  padding: 10px;
  border: 1px solid #ddd;
`,P=t.caption`
  caption-side: top;
  font-size: 24px;
  margin: 10px 0;
`,z=t.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
`,E=t.div`
  display: flex;
  align-items: center;
`,S=t.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,T=t.button`
  width: 9.5px;
  height: 9.5px;
  background-color: ${s=>s.active?"var(--main-color)":"#E7F1ED"};
  border: none;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: ${s=>s.active?"var(--main-color)":"var(--active-color)"};
  }
`,A=({filter:s})=>{const[n,c]=x.useState([]),[a,p]=x.useState(1),o=5;x.useEffect(()=>{(async()=>{try{const l=await v.get("https://e-pharmacy-backend-ez9m.onrender.com/api/orders");c(l.data)}catch(l){console.error("Error fetching orders:",l)}})()},[]);const u=r=>{const l={month:"long",day:"numeric",year:"numeric"};return new Date(r).toLocaleDateString("en-US",l)},h=s?n.filter(r=>r.name.toLowerCase().includes(s.toLowerCase())):n,g=a*o,b=g-o,m=h.slice(b,g),j=r=>p(r);return e.jsxs(y,{children:[e.jsxs(k,{children:[e.jsx(P,{children:"All orders"}),e.jsx(C,{children:e.jsxs(f,{children:[e.jsx(i,{children:"User Info"}),e.jsx(i,{children:"Address"}),e.jsx(i,{children:"Products"}),e.jsx(i,{children:"Order date"}),e.jsx(i,{children:"Price"}),e.jsx(i,{children:"Status"})]})}),e.jsx(O,{children:m.map(r=>e.jsxs(f,{children:[e.jsx(d,{children:e.jsxs(E,{children:[e.jsx(z,{src:r.photo,alt:r.name}),r.name]})}),e.jsx(d,{children:r.address}),e.jsx(d,{children:r.products}),e.jsx(d,{children:u(r.order_date)}),e.jsx(d,{children:r.price}),e.jsx(d,{type:r.status,children:e.jsx("span",{children:r.status})})]},r._id))})]}),e.jsx(S,{children:[...Array(Math.ceil(h.length/o)).keys()].map(r=>e.jsx(T,{active:a===r+1,onClick:()=>j(r+1)},r+1))})]})},D=t.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  max-width: 300px;
  margin: 20px 0;
`,F=t.input`
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
`,U=t.button`
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
`;const L=({handleFilter:s})=>{const[n,c]=x.useState(""),a=o=>{c(o.target.value)},p=o=>{o.key==="Enter"&&s(n)};return e.jsxs(D,{children:[e.jsx(F,{type:"text",value:n,onChange:a,onKeyDown:p,placeholder:"User Name"}),e.jsxs(U,{onClick:()=>s(n),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-filter"})}),"Filter"]})]})},I=()=>{const[s,n]=x.useState(""),c=a=>{n(a)};return e.jsxs(w,{children:[e.jsx(L,{handleFilter:c}),e.jsx(A,{filter:s})]})};export{I as default};
