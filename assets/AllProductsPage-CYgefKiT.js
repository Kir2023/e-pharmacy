import{p as t,r as d,j as e,b as C,C as F}from"./index-BEnK0fFw.js";import{P as _,U as D}from"./Filter-tJ_4Faww.js";const H=t.div`
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
`,L=t.h1`
  font-size: 20px;
  font-weight: 600;
  color: (--main-text-color);
  margin-top: 40px;
`,N=t.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 335px;
`,U=t.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;

  svg {
    width: 24px;
    height: 24px;
    stroke: var(--main-text-color);
    stroke-width: 2;
  }
`,R=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 20px;
`,v=t.input`
  padding: 13px 18px;
  width: 295px;
  height: 44px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(29, 30, 33, 0.8);
  background: #ffffff;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;

  &:hover,
  &:focus {
    border: 1px solid var(--active-color);
  }
`;t.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;t.select`
  appearance: none;
  width: 100%;
  height: 44px;
  padding: 13px 18px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(29, 30, 33, 0.8);
  background: #ffffff;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
`;t.div`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;t.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;t.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;const I=t.button`
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
`,O=["Medicine","Head","Hand","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],G=({isOpen:p,onClose:n,onAddProduct:a})=>{const[x,s]=d.useState(""),[u,c]=d.useState(O[0]),[b,h]=d.useState(""),[l,w]=d.useState(""),[f,A]=d.useState(""),E=async o=>{o.preventDefault();const S={name:x,category:u,stock:b,suppliers:l,price:f};try{const m=(await C.post("https://e-pharmacy-backend-ez9m.onrender.com/api/products",S)).data;console.log("Added product:",m),a(m),n()}catch(z){console.error("Error adding product:",z)}},B=o=>{o.target===o.currentTarget&&p&&n()};return p&&e.jsx(H,{onClick:B,children:e.jsxs(N,{children:[e.jsx(L,{children:"Add a new product"}),e.jsx(U,{onClick:n,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-cross"})})}),e.jsxs(R,{onSubmit:E,children:[e.jsx(v,{type:"text",value:x,onChange:o=>s(o.target.value),placeholder:"Product Info",required:!0}),e.jsx(v,{as:"select",value:u,onChange:o=>c(o.target.value),required:!0,children:O.map(o=>e.jsx("option",{value:o,children:o},o))}),e.jsx(v,{type:"number",value:b,onChange:o=>h(o.target.value),required:!0}),e.jsx(v,{type:"text",value:l,onChange:o=>w(o.target.value),required:!0}),e.jsx(v,{type:"number",step:"0.01",value:f,onChange:o=>A(o.target.value),required:!0}),e.jsx(I,{type:"submit",children:"Add"}),e.jsx(I,{type:"button",onClick:n,children:"Cancel"})]})]})})},V=t.div`
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
`,J=t.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 80%;
`,K=t.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`,Q=t.form`
  display: flex;
  flex-direction: column;
`,y=t.div`
  margin-bottom: 15px;
`,k=t.label`
  margin-bottom: 5px;
  font-weight: bold;
`,P=t.input`
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
`,W=({isOpen:p,onClose:n,product:a,onSave:x})=>{const[s,u]=d.useState({name:"",category:"",stock:0,suppliers:"",price:0});d.useEffect(()=>{u(a)},[a]);const c=h=>{const{name:l,value:w}=h.target;u({...s,[l]:w})},b=async h=>{h.preventDefault();try{const l=await C.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${s._id}`,s);console.log("Product updated successfully:",l.data),x(s),n()}catch(l){console.error("Error updating product:",l)}};return p&&e.jsx(V,{children:e.jsxs(J,{children:[e.jsx(K,{onClick:n,children:"×"}),e.jsxs(Q,{onSubmit:b,children:[e.jsxs(y,{children:[e.jsx(k,{children:"Product Info"}),e.jsx(P,{type:"text",name:"name",value:s.name,onChange:c,required:!0})]}),e.jsxs(y,{children:[e.jsx(k,{children:"Category"}),e.jsx(P,{type:"text",name:"category",value:s.category,onChange:c,required:!0})]}),e.jsxs(y,{children:[e.jsx(k,{children:"Stock"}),e.jsx(P,{type:"number",name:"stock",value:s.stock,onChange:c,required:!0})]}),e.jsxs(y,{children:[e.jsx(k,{children:"Suppliers"}),e.jsx(P,{type:"text",name:"suppliers",value:s.suppliers,onChange:c,required:!0})]}),e.jsxs(y,{children:[e.jsx(k,{children:"Price"}),e.jsx(P,{type:"number",name:"price",step:"0.01",value:s.price,onChange:c,required:!0})]}),e.jsx(T,{type:"submit",children:"Save"}),e.jsx(T,{type:"button",onClick:n,children:"Cancel"})]})]})})},X=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1320px;
  }
`,Y=t.table`
  background-color: #ffffff;
  width: 671px;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 960px;
  }

  @media screen and (min-width: 1440px) {
    width: 1320px;
  }
`,Z=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,ee=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,te=t.tbody``,M=t.tr``,j=t.th`
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

  span {
  display: flex;
  gap: 8px;
  }

  &:last-child {
    border-right: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
`,re=t.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 0.3s, color 0.3s;

  svg {
    width: 32px;
    height: 32px;
    stroke: var(--main-color);
    fill: white;
  }

  &:hover svg,
  &:focus svg {
    fill: var(--main-color);
    stroke: white;
  }
`,oe=t.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 0.3s, color 0.3s;

  svg {
    width: 32px;
    height: 32px;
    stroke: var(--cancel-color);
    fill: white;
  }

  &:hover svg,
  &:focus svg {
    fill: var(--cancel-color);
    stroke: white;
  }
`,ne=t.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: #000;
  margin-bottom: 20px;

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

    &:hover {
      background-color: var(--active-color);
    }
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 1223px;
    top: 117px;
    margin-bottom: 0;
  }
`,se=({filter:p})=>{const[n,a]=d.useState([]),[x,s]=d.useState(!1),[u,c]=d.useState(!1),[b,h]=d.useState(null),[l,w]=d.useState(1),f=5;d.useEffect(()=>{(async()=>{try{const i=await C.get("https://e-pharmacy-backend-ez9m.onrender.com/api/products");console.log("Fetched products:",i.data),Array.isArray(i.data.products)?a(i.data.products):console.error("Unexpected response format:",i.data)}catch(i){console.error("Error fetching products:",i)}})()},[]);const A=r=>{a([r,...n])},E=r=>{h(r),c(!0)},B=async r=>{try{await C.delete(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${r}`),a(n.filter(i=>i._id!==r))}catch(i){console.error("Error deleting product:",i)}},o=p?n.filter(r=>r.name&&r.name.toLowerCase().includes(p.toLowerCase())):n,S=l*f,z=S-f,m=o.slice(z,S),$=r=>w(r);return e.jsxs(X,{children:[e.jsxs(ne,{onClick:()=>s(!0),children:[e.jsx("div",{className:"circle",children:"+"}),"Add a new product"]}),e.jsxs(Y,{children:[e.jsx(Z,{children:"All Products"}),e.jsx(ee,{children:e.jsxs(M,{children:[e.jsx(j,{children:"Product Info"}),e.jsx(j,{children:"Category"}),e.jsx(j,{children:"Stock"}),e.jsx(j,{children:"Suppliers"}),e.jsx(j,{children:"Price"}),e.jsx(j,{children:"Action"})]})}),e.jsx(te,{children:Array.isArray(m)&&m.length>0?m.map(r=>e.jsxs(M,{children:[e.jsx(g,{children:r.name}),e.jsx(g,{children:r.category}),e.jsx(g,{children:r.stock}),e.jsx(g,{children:r.suppliers}),e.jsx(g,{children:r.price}),e.jsx(g,{children:e.jsxs("span",{children:[e.jsx(re,{onClick:()=>E(r),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-pencil"})})}),e.jsx(oe,{onClick:()=>B(r._id),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-trash"})})})]})})]},r._id)):e.jsx(M,{children:e.jsx(g,{colSpan:"6",children:"No products available"})})})]}),x&&e.jsx(G,{isOpen:x,onClose:()=>s(!1),onAddProduct:A}),u&&e.jsx(W,{isOpen:u,onClose:()=>c(!1),product:b,onSave:r=>{C.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${r._id}`,r).then(i=>{console.log("Product updated successfully:",i.data),a(n.map(q=>q._id===r._id?r:q))}).catch(i=>{console.error("Error updating product:",i)}).finally(()=>{c(!1)})}}),e.jsx(_,{totalItems:o.length,itemsPerPage:f,currentPage:l,paginate:$})]})},ae=()=>{const[p,n]=d.useState(""),a=x=>{n(x)};return e.jsxs(F,{children:[e.jsx(D,{handleFilter:a,placeholder:"Product Name"}),e.jsx(se,{filter:p})]})};export{ae as default};
