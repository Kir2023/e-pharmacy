import{p as r,r as d,j as e,b as S,C as B}from"./index-CvTBbUrB.js";import{U as F}from"./Filter-v7K2do9T.js";const O=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,T=r.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 80%;
`,_=r.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`,D=r.form`
  display: flex;
  flex-direction: column;
`,y=r.div`
  margin-bottom: 15px;
`,k=r.label`
  margin-bottom: 5px;
  font-weight: bold;
`,C=r.input`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`,$=r.button`
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;

  &:first-of-type {
    margin-right: 10px;
  }
`,M=["Medicine","Head","Hand","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],H=({isOpen:l,onClose:n})=>{const[c,p]=d.useState(""),[s,x]=d.useState(M[0]),[a,m]=d.useState(""),[u,i]=d.useState(""),[g,A]=d.useState(""),j=async t=>{t.preventDefault();const o={name:c,category:s,stock:a,suppliers:u,price:g};try{const I=(await S.post("https://e-pharmacy-backend-ez9m.onrender.com/api/products",o)).data;console.log("Added product:",I),n()}catch(f){console.error("Error adding product:",f)}};return l&&e.jsx(O,{children:e.jsxs(T,{children:[e.jsx(_,{onClick:n,children:"×"}),e.jsxs(D,{onSubmit:j,children:[e.jsxs(y,{children:[e.jsx(k,{children:"Product Info"}),e.jsx(C,{type:"text",value:c,onChange:t=>p(t.target.value),required:!0})]}),e.jsxs(y,{children:[e.jsx(k,{children:"Category"}),e.jsx(C,{as:"select",value:s,onChange:t=>x(t.target.value),required:!0,children:M.map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(y,{children:[e.jsx(k,{children:"Stock"}),e.jsx(C,{type:"number",value:a,onChange:t=>m(t.target.value),required:!0})]}),e.jsxs(y,{children:[e.jsx(k,{children:"Suppliers"}),e.jsx(C,{type:"text",value:u,onChange:t=>i(t.target.value),required:!0})]}),e.jsxs(y,{children:[e.jsx(k,{children:"Price"}),e.jsx(C,{type:"number",step:"0.01",value:g,onChange:t=>A(t.target.value),required:!0})]}),e.jsx($,{type:"submit",children:"Add"}),e.jsx($,{type:"button",onClick:n,children:"Cancel"})]})]})})},L=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,N=r.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 80%;
`,U=r.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`,G=r.form`
  display: flex;
  flex-direction: column;
`,v=r.div`
  margin-bottom: 15px;
`,w=r.label`
  margin-bottom: 5px;
  font-weight: bold;
`,P=r.input`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`,q=r.button`
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;

  &:first-of-type {
    margin-right: 10px;
  }
`,R=({isOpen:l,onClose:n,product:c,onSave:p})=>{const[s,x]=d.useState({name:"",category:"",stock:0,suppliers:"",price:0});d.useEffect(()=>{x(c)},[c]);const a=u=>{const{name:i,value:g}=u.target;x({...s,[i]:g})},m=async u=>{u.preventDefault();try{const i=await S.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${s._id}`,s);console.log("Product updated successfully:",i.data),p(s),n()}catch(i){console.error("Error updating product:",i)}};return l&&e.jsx(L,{children:e.jsxs(N,{children:[e.jsx(U,{onClick:n,children:"×"}),e.jsxs(G,{onSubmit:m,children:[e.jsxs(v,{children:[e.jsx(w,{children:"Product Info"}),e.jsx(P,{type:"text",name:"name",value:s.name,onChange:a,required:!0})]}),e.jsxs(v,{children:[e.jsx(w,{children:"Category"}),e.jsx(P,{type:"text",name:"category",value:s.category,onChange:a,required:!0})]}),e.jsxs(v,{children:[e.jsx(w,{children:"Stock"}),e.jsx(P,{type:"number",name:"stock",value:s.stock,onChange:a,required:!0})]}),e.jsxs(v,{children:[e.jsx(w,{children:"Suppliers"}),e.jsx(P,{type:"text",name:"suppliers",value:s.suppliers,onChange:a,required:!0})]}),e.jsxs(v,{children:[e.jsx(w,{children:"Price"}),e.jsx(P,{type:"number",name:"price",step:"0.01",value:s.price,onChange:a,required:!0})]}),e.jsx(q,{type:"submit",children:"Save"}),e.jsx(q,{type:"button",onClick:n,children:"Cancel"})]})]})})},V=r.div`
  padding: 20px;
`,J=r.table`
  width: 100%;
  border-collapse: collapse;
`,K=r.thead`
  background-color: #f1f1f1;
`,Q=r.tbody``,E=r.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`,b=r.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`,h=r.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`,W=r.caption`
  caption-side: top;
  text-align: left;
  font-weight: bold;
  padding: 10px;
`,z=r.button`
  padding: 5px 10px;
  margin-right: 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`,X=r(z)`
  background-color: #008cba;
  margin-bottom: 10px;

  &:hover {
    background-color: #007bb5;
  }
`;r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;r.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  width: 500px;
  max-width: 100%;
`;r.button`
  background: transparent;
  border: none;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;const Y=({filter:l})=>{const[n,c]=d.useState([]),[p,s]=d.useState(!1),[x,a]=d.useState(!1),[m,u]=d.useState(null);d.useEffect(()=>{(async()=>{try{const o=await S.get("https://e-pharmacy-backend-ez9m.onrender.com/api/products");console.log("Fetched products:",o.data),Array.isArray(o.data.products)?c(o.data.products):console.error("Unexpected response format:",o.data)}catch(o){console.error("Error fetching products:",o)}})()},[]);const i=t=>{c([t,...n])},g=t=>{u(t),a(!0)},A=async t=>{try{await S.delete(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${t}`),c(n.filter(o=>o._id!==t))}catch(o){console.error("Error deleting product:",o)}},j=l?n.filter(t=>t.name&&t.name.toLowerCase().includes(l.toLowerCase())):n;return e.jsxs(V,{children:[e.jsx(X,{onClick:()=>s(!0),children:"+ Add a new product"}),e.jsxs(J,{children:[e.jsx(W,{children:"All Products"}),e.jsx(K,{children:e.jsxs(E,{children:[e.jsx(b,{children:"Product Info"}),e.jsx(b,{children:"Category"}),e.jsx(b,{children:"Stock"}),e.jsx(b,{children:"Suppliers"}),e.jsx(b,{children:"Price"}),e.jsx(b,{children:"Action"})]})}),e.jsx(Q,{children:Array.isArray(j)&&j.length>0?j.map(t=>e.jsxs(E,{children:[e.jsx(h,{children:t.name}),e.jsx(h,{children:t.category}),e.jsx(h,{children:t.stock}),e.jsx(h,{children:t.suppliers}),e.jsx(h,{children:t.price}),e.jsxs(h,{children:[e.jsx(z,{onClick:()=>g(t),children:"Edit"}),e.jsx(z,{onClick:()=>A(t._id),children:"Delete"})]})]},t._id)):e.jsx(E,{children:e.jsx(h,{colSpan:"6",children:"No products available"})})})]}),p&&e.jsx(H,{isOpen:p,onClose:()=>s(!1),onAddProduct:i}),x&&e.jsx(R,{isOpen:x,onClose:()=>a(!1),product:m,onSave:t=>{S.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${t._id}`,t).then(o=>{console.log("Product updated successfully:",o.data),c(n.map(f=>f._id===t._id?t:f))}).catch(o=>{console.error("Error updating product:",o)}).finally(()=>{a(!1)})}})]})},te=()=>{const[l,n]=d.useState(""),c=p=>{n(p)};return e.jsxs(B,{children:[e.jsx(F,{handleFilter:c,placeholder:"Product Name"}),e.jsx(Y,{filter:l})]})};export{te as default};
