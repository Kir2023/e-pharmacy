import{p as t,r as s,j as e,b as S,C as L}from"./index-DiUXmEQY.js";import{P as O,U as _}from"./Filter-BRdBaXYn.js";const D=t.div`
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
`,H=t.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  margin-top: 40px;
`,N=t.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 335px;
  position: relative;

  @media screen and (min-width: 768px) {
    min-width: 536px;
    height: 412px;
  }
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

  @media screen and (min-width: 768px) {
    svg {
      width: 26px;
      height: 26px;
    }
  }
`,R=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,y=t.input`
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

  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
  }

  @media screen and (min-width: 768px) {
    width: 224px;
  }
`,G=t.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`,T=t.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 50px;
  gap: 8px;
  background-color: rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  color: rgba(29, 30, 33, 0.4);
  width: 140px;
  height: 44px;

  &:hover,
  &:focus {
    background-color: var(--active-color);
    color: white;
  }
`,$=["Medicine","Head","Hand","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],K=({isOpen:a,onClose:n,onAddProduct:c})=>{const[x,i]=s.useState(""),[u,l]=s.useState($[0]),[b,h]=s.useState(""),[p,v]=s.useState(""),[f,z]=s.useState(""),A=async o=>{o.preventDefault();const M={name:x,category:u,stock:b,suppliers:p,price:f};try{const E=(await S.post("https://e-pharmacy-backend-ez9m.onrender.com/api/products",M)).data;console.log("Added product:",E),c(E),n()}catch(w){console.error("Error adding product:",w)}},B=o=>{o.target===o.currentTarget&&a&&n()},g=o=>{o.key==="Escape"&&n()};return s.useEffect(()=>(a?window.addEventListener("keydown",g):window.removeEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}),[g,a]),a&&e.jsx(D,{onClick:B,children:e.jsxs(N,{children:[e.jsx(H,{children:"Add a new product"}),e.jsx(U,{onClick:n,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-cross"})})}),e.jsxs(R,{onSubmit:A,children:[e.jsx(y,{type:"text",value:x,onChange:o=>i(o.target.value),placeholder:"Product Info",required:!0}),e.jsx(y,{as:"select",value:u,onChange:o=>l(o.target.value),required:!0,children:$.map(o=>e.jsx("option",{value:o,children:o},o))}),e.jsx(y,{type:"number",step:"1",min:"1",value:b,onChange:o=>h(o.target.value),placeholder:"Stock",required:!0}),e.jsx(y,{type:"text",value:p,onChange:o=>v(o.target.value),placeholder:"Suppliers",required:!0}),e.jsx(y,{type:"number",step:"0.01",min:"0.01",value:f,onChange:o=>z(o.target.value),placeholder:"Price",required:!0}),e.jsxs(G,{children:[e.jsx(T,{type:"submit",children:"Add"}),e.jsx(T,{type:"button",onClick:n,children:"Cancel"})]})]})]})})},V=t.div`
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
`,W=t.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 80%;
`,J=t.button`
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
`,k=t.div`
  margin-bottom: 15px;
`,P=t.label`
  margin-bottom: 5px;
  font-weight: bold;
`,C=t.input`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`,F=t.button`
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
`,X=({isOpen:a,onClose:n,product:c,onSave:x})=>{const[i,u]=s.useState({name:"",category:"",stock:0,suppliers:"",price:0});s.useEffect(()=>{u(c)},[c]);const l=h=>{const{name:p,value:v}=h.target;u({...i,[p]:v})},b=async h=>{h.preventDefault();try{const p=await S.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${i._id}`,i);console.log("Product updated successfully:",p.data),x(i),n()}catch(p){console.error("Error updating product:",p)}};return a&&e.jsx(V,{children:e.jsxs(W,{children:[e.jsx(J,{onClick:n,children:"×"}),e.jsxs(Q,{onSubmit:b,children:[e.jsxs(k,{children:[e.jsx(P,{children:"Product Info"}),e.jsx(C,{type:"text",name:"name",value:i.name,onChange:l,required:!0})]}),e.jsxs(k,{children:[e.jsx(P,{children:"Category"}),e.jsx(C,{type:"text",name:"category",value:i.category,onChange:l,required:!0})]}),e.jsxs(k,{children:[e.jsx(P,{children:"Stock"}),e.jsx(C,{type:"number",name:"stock",value:i.stock,onChange:l,required:!0})]}),e.jsxs(k,{children:[e.jsx(P,{children:"Suppliers"}),e.jsx(C,{type:"text",name:"suppliers",value:i.suppliers,onChange:l,required:!0})]}),e.jsxs(k,{children:[e.jsx(P,{children:"Price"}),e.jsx(C,{type:"number",name:"price",step:"0.01",value:i.price,onChange:l,required:!0})]}),e.jsx(F,{type:"submit",children:"Save"}),e.jsx(F,{type:"button",onClick:n,children:"Cancel"})]})]})})},Y=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1320px;
  }
`,Z=t.table`
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
`,ee=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,te=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,re=t.tbody``,q=t.tr``,j=t.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,m=t.td`
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
`,oe=t.button`
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
`,ne=t.button`
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
`,se=t.button`
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
`,ie=({filter:a})=>{const[n,c]=s.useState([]),[x,i]=s.useState(!1),[u,l]=s.useState(!1),[b,h]=s.useState(null),[p,v]=s.useState(1),f=5;s.useEffect(()=>{(async()=>{try{const d=await S.get("https://e-pharmacy-backend-ez9m.onrender.com/api/products");console.log("Fetched products:",d.data),Array.isArray(d.data.products)?c(d.data.products):console.error("Unexpected response format:",d.data)}catch(d){console.error("Error fetching products:",d)}})()},[]);const z=r=>{c([r,...n])},A=r=>{h(r),l(!0)},B=async r=>{try{await S.delete(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${r}`),c(n.filter(d=>d._id!==r))}catch(d){console.error("Error deleting product:",d)}},g=a?n.filter(r=>r.name&&r.name.toLowerCase().includes(a.toLowerCase())):n,o=p*f,M=o-f,w=g.slice(M,o),E=r=>v(r);return e.jsxs(Y,{children:[e.jsxs(se,{onClick:()=>i(!0),children:[e.jsx("div",{className:"circle",children:"+"}),"Add a new product"]}),e.jsxs(Z,{children:[e.jsx(ee,{children:"All Products"}),e.jsx(te,{children:e.jsxs(q,{children:[e.jsx(j,{children:"Product Info"}),e.jsx(j,{children:"Category"}),e.jsx(j,{children:"Stock"}),e.jsx(j,{children:"Suppliers"}),e.jsx(j,{children:"Price"}),e.jsx(j,{children:"Action"})]})}),e.jsx(re,{children:Array.isArray(w)&&w.length>0?w.map(r=>e.jsxs(q,{children:[e.jsx(m,{children:r.name}),e.jsx(m,{children:r.category}),e.jsx(m,{children:r.stock}),e.jsx(m,{children:r.suppliers}),e.jsx(m,{children:r.price}),e.jsx(m,{children:e.jsxs("span",{children:[e.jsx(oe,{onClick:()=>A(r),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-pencil"})})}),e.jsx(ne,{onClick:()=>B(r._id),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-trash"})})})]})})]},r._id)):e.jsx(q,{children:e.jsx(m,{colSpan:"6",children:"No products available"})})})]}),x&&e.jsx(K,{isOpen:x,onClose:()=>i(!1),onAddProduct:z}),u&&e.jsx(X,{isOpen:u,onClose:()=>l(!1),product:b,onSave:r=>{S.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${r._id}`,r).then(d=>{console.log("Product updated successfully:",d.data),c(n.map(I=>I._id===r._id?r:I))}).catch(d=>{console.error("Error updating product:",d)}).finally(()=>{l(!1)})}}),e.jsx(O,{totalItems:g.length,itemsPerPage:f,currentPage:p,paginate:E})]})},ce=()=>{const[a,n]=s.useState(""),c=x=>{n(x)};return e.jsxs(L,{children:[e.jsx(_,{handleFilter:c,placeholder:"Product Name"}),e.jsx(ie,{filter:a})]})};export{ce as default};
