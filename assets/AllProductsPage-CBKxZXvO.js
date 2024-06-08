import{p as t,r as i,j as e,b as z,C as L}from"./index-33BLTpYy.js";import{P as H,U as N}from"./Filter-CnakTvP4.js";const U=t.div`
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
`,G=t.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 80%;
`,R=t.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`,V=t.form`
  display: flex;
  flex-direction: column;
`,w=t.div`
  margin-bottom: 15px;
`,P=t.label`
  margin-bottom: 5px;
  font-weight: bold;
`,k=t.input`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`,O=t.button`
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
`,B=["Medicine","Head","Hand","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],J=({isOpen:u,onClose:o,onAddProduct:a})=>{const[p,s]=i.useState(""),[x,c]=i.useState(B[0]),[b,h]=i.useState(""),[l,j]=i.useState(""),[m,$]=i.useState(""),M=async n=>{n.preventDefault();const A={name:p,category:x,stock:b,suppliers:l,price:m};try{const E=(await z.post("https://e-pharmacy-backend-ez9m.onrender.com/api/products",A)).data;console.log("Added product:",E),a(E),o()}catch(y){console.error("Error adding product:",y)}};return u&&e.jsx(U,{children:e.jsxs(G,{children:[e.jsx(R,{onClick:o,children:"×"}),e.jsxs(V,{onSubmit:M,children:[e.jsxs(w,{children:[e.jsx(P,{children:"Product Info"}),e.jsx(k,{type:"text",value:p,onChange:n=>s(n.target.value),required:!0})]}),e.jsxs(w,{children:[e.jsx(P,{children:"Category"}),e.jsx(k,{as:"select",value:x,onChange:n=>c(n.target.value),required:!0,children:B.map(n=>e.jsx("option",{value:n,children:n},n))})]}),e.jsxs(w,{children:[e.jsx(P,{children:"Stock"}),e.jsx(k,{type:"number",value:b,onChange:n=>h(n.target.value),required:!0})]}),e.jsxs(w,{children:[e.jsx(P,{children:"Suppliers"}),e.jsx(k,{type:"text",value:l,onChange:n=>j(n.target.value),required:!0})]}),e.jsxs(w,{children:[e.jsx(P,{children:"Price"}),e.jsx(k,{type:"number",step:"0.01",value:m,onChange:n=>$(n.target.value),required:!0})]}),e.jsx(O,{type:"submit",children:"Add"}),e.jsx(O,{type:"button",onClick:o,children:"Cancel"})]})]})})},K=t.div`
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
`,Q=t.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 80%;
`,W=t.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`,X=t.form`
  display: flex;
  flex-direction: column;
`,C=t.div`
  margin-bottom: 15px;
`,v=t.label`
  margin-bottom: 5px;
  font-weight: bold;
`,S=t.input`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`,T=t.button`
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
`,Y=({isOpen:u,onClose:o,product:a,onSave:p})=>{const[s,x]=i.useState({name:"",category:"",stock:0,suppliers:"",price:0});i.useEffect(()=>{x(a)},[a]);const c=h=>{const{name:l,value:j}=h.target;x({...s,[l]:j})},b=async h=>{h.preventDefault();try{const l=await z.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${s._id}`,s);console.log("Product updated successfully:",l.data),p(s),o()}catch(l){console.error("Error updating product:",l)}};return u&&e.jsx(K,{children:e.jsxs(Q,{children:[e.jsx(W,{onClick:o,children:"×"}),e.jsxs(X,{onSubmit:b,children:[e.jsxs(C,{children:[e.jsx(v,{children:"Product Info"}),e.jsx(S,{type:"text",name:"name",value:s.name,onChange:c,required:!0})]}),e.jsxs(C,{children:[e.jsx(v,{children:"Category"}),e.jsx(S,{type:"text",name:"category",value:s.category,onChange:c,required:!0})]}),e.jsxs(C,{children:[e.jsx(v,{children:"Stock"}),e.jsx(S,{type:"number",name:"stock",value:s.stock,onChange:c,required:!0})]}),e.jsxs(C,{children:[e.jsx(v,{children:"Suppliers"}),e.jsx(S,{type:"text",name:"suppliers",value:s.suppliers,onChange:c,required:!0})]}),e.jsxs(C,{children:[e.jsx(v,{children:"Price"}),e.jsx(S,{type:"number",name:"price",step:"0.01",value:s.price,onChange:c,required:!0})]}),e.jsx(T,{type:"submit",children:"Save"}),e.jsx(T,{type:"button",onClick:o,children:"Cancel"})]})]})})},Z=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1320px;
  }
`,ee=t.table`
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
`,te=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,re=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,ne=t.tbody``,I=t.tr``,f=t.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,g=t.td`
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
`,_=t.button`
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
`,oe=t.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: #000;

  .circle {
    background-color: var(--main-color);
    color: white;
    border-radius: 60px;
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 1223px;
    top: 117px;
  }
`;t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;t.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  width: 500px;
  max-width: 100%;
`;t.button`
  background: transparent;
  border: none;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;const se=({filter:u})=>{const[o,a]=i.useState([]),[p,s]=i.useState(!1),[x,c]=i.useState(!1),[b,h]=i.useState(null),[l,j]=i.useState(1),m=5;i.useEffect(()=>{(async()=>{try{const d=await z.get("https://e-pharmacy-backend-ez9m.onrender.com/api/products");console.log("Fetched products:",d.data),Array.isArray(d.data.products)?a(d.data.products):console.error("Unexpected response format:",d.data)}catch(d){console.error("Error fetching products:",d)}})()},[]);const $=r=>{a([r,...o])},M=r=>{h(r),c(!0)},n=async r=>{try{await z.delete(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${r}`),a(o.filter(d=>d._id!==r))}catch(d){console.error("Error deleting product:",d)}},A=u?o.filter(r=>r.name&&r.name.toLowerCase().includes(u.toLowerCase())):o,y=l*m,E=y-m,q=A.slice(E,y),D=r=>j(r);return e.jsxs(Z,{children:[e.jsxs(oe,{onClick:()=>s(!0),children:[e.jsx("div",{className:"circle",children:"+"}),"Add a new product"]}),e.jsxs(ee,{children:[e.jsx(te,{children:"All Products"}),e.jsx(re,{children:e.jsxs(I,{children:[e.jsx(f,{children:"Product Info"}),e.jsx(f,{children:"Category"}),e.jsx(f,{children:"Stock"}),e.jsx(f,{children:"Suppliers"}),e.jsx(f,{children:"Price"}),e.jsx(f,{children:"Action"})]})}),e.jsx(ne,{children:Array.isArray(q)&&q.length>0?q.map(r=>e.jsxs(I,{children:[e.jsx(g,{children:r.name}),e.jsx(g,{children:r.category}),e.jsx(g,{children:r.stock}),e.jsx(g,{children:r.suppliers}),e.jsx(g,{children:r.price}),e.jsxs(g,{children:[e.jsx(_,{onClick:()=>M(r),children:"Edit"}),e.jsx(_,{onClick:()=>n(r._id),children:"Delete"})]})]},r._id)):e.jsx(I,{children:e.jsx(g,{colSpan:"6",children:"No products available"})})})]}),p&&e.jsx(J,{isOpen:p,onClose:()=>s(!1),onAddProduct:$}),x&&e.jsx(Y,{isOpen:x,onClose:()=>c(!1),product:b,onSave:r=>{z.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${r._id}`,r).then(d=>{console.log("Product updated successfully:",d.data),a(o.map(F=>F._id===r._id?r:F))}).catch(d=>{console.error("Error updating product:",d)}).finally(()=>{c(!1)})}}),e.jsx(H,{totalItems:A.length,itemsPerPage:m,currentPage:l,paginate:D})]})},ae=()=>{const[u,o]=i.useState(""),a=p=>{o(p)};return e.jsxs(L,{children:[e.jsx(N,{handleFilter:a,placeholder:"Product Name"}),e.jsx(se,{filter:u})]})};export{ae as default};
