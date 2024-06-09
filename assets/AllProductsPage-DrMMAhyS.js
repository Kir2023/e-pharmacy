import{p as r,r as i,j as e,b as S,C as T}from"./index-BT54QvEX.js";import{P as F,U as _}from"./Filter-DBDDvijB.js";const D=r.div`
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
`,H=r.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  margin-top: 40px;
`,N=r.div`
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
`,U=r.button`
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
`,R=r.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,B=r.input`
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
`,W=r.div`
  position: relative;
  width: 295px;
  height: 44px;

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    height: 100%;
    padding: 13px 18px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: rgba(29, 30, 33, 0.8);
    background: #ffffff;
    border: 1px solid rgba(29, 30, 33, 0.1);
    border-radius: 60px;
    cursor: pointer;

    &:hover,
    &:focus {
      border: 1px solid var(--active-color);
    }

    &::placeholder {
      color: rgba(29, 30, 33, 0.4);
    }
  }

  svg {
    position: absolute;
    top: 50%;
    right: 18px;
    transform: translateY(-50%);
    pointer-events: none;
    width: 24px;
    height: 24px;
    fill: white;
    stroke: var(--main-text-color);
  }

  @media screen and (min-width: 768px) {
    width: 224px;
  }
`,G=r.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`,O=r.button`
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
`,$=["Medicine","Head","Hand","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],K=({isOpen:a,onClose:n,onAddProduct:c})=>{const[x,d]=i.useState(""),[h,l]=i.useState($[0]),[m,u]=i.useState(""),[p,v]=i.useState(""),[f,M]=i.useState(""),[q,E]=i.useState(!1),z=async o=>{o.preventDefault();const t={name:x,category:h,stock:m,suppliers:p,price:f};try{const y=(await S.post("https://e-pharmacy-backend-ez9m.onrender.com/api/products",t)).data;console.log("Added product:",y),c(y),n()}catch(s){console.error("Error adding product:",s)}},A=o=>{o.target===o.currentTarget&&a&&n()},b=o=>{o.key==="Escape"&&n()};i.useEffect(()=>(a?window.addEventListener("keydown",b):window.removeEventListener("keydown",b),()=>{window.removeEventListener("keydown",b)}),[b,a]);const j=()=>{E(o=>!o)};return i.useEffect(()=>{const o=t=>{t.target.closest("select")||E(!1)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[]),a&&e.jsx(D,{onClick:A,children:e.jsxs(N,{children:[e.jsx(H,{children:"Add a new product"}),e.jsx(U,{onClick:n,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-cross"})})}),e.jsxs(R,{onSubmit:z,children:[e.jsx(B,{type:"text",value:x,onChange:o=>d(o.target.value),placeholder:"Product Info",required:!0}),e.jsxs(W,{onClick:j,children:[e.jsx("select",{value:h,onChange:o=>l(o.target.value),required:!0,children:$.map(o=>e.jsx("option",{value:o,children:o},o))}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`./sprite.svg#icon-chevron-${q?"up":"down"}`})})]}),e.jsx(B,{type:"number",step:"1",min:"1",value:m,onChange:o=>u(o.target.value),placeholder:"Stock",required:!0}),e.jsx(B,{type:"text",value:p,onChange:o=>v(o.target.value),placeholder:"Suppliers",required:!0}),e.jsx(B,{type:"number",step:"0.01",min:"0.01",value:f,onChange:o=>M(o.target.value),placeholder:"Price",required:!0}),e.jsxs(G,{children:[e.jsx(O,{type:"submit",children:"Add"}),e.jsx(O,{type:"button",onClick:n,children:"Cancel"})]})]})]})})},V=r.div`
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
`,Y=r.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 80%;
`,J=r.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`,Q=r.form`
  display: flex;
  flex-direction: column;
`,k=r.div`
  margin-bottom: 15px;
`,P=r.label`
  margin-bottom: 5px;
  font-weight: bold;
`,C=r.input`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`,L=r.button`
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
`,X=({isOpen:a,onClose:n,product:c,onSave:x})=>{const[d,h]=i.useState({name:"",category:"",stock:0,suppliers:"",price:0});i.useEffect(()=>{h(c)},[c]);const l=u=>{const{name:p,value:v}=u.target;h({...d,[p]:v})},m=async u=>{u.preventDefault();try{const p=await S.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${d._id}`,d);console.log("Product updated successfully:",p.data),x(d),n()}catch(p){console.error("Error updating product:",p)}};return a&&e.jsx(V,{children:e.jsxs(Y,{children:[e.jsx(J,{onClick:n,children:"×"}),e.jsxs(Q,{onSubmit:m,children:[e.jsxs(k,{children:[e.jsx(P,{children:"Product Info"}),e.jsx(C,{type:"text",name:"name",value:d.name,onChange:l,required:!0})]}),e.jsxs(k,{children:[e.jsx(P,{children:"Category"}),e.jsx(C,{type:"text",name:"category",value:d.category,onChange:l,required:!0})]}),e.jsxs(k,{children:[e.jsx(P,{children:"Stock"}),e.jsx(C,{type:"number",name:"stock",value:d.stock,onChange:l,required:!0})]}),e.jsxs(k,{children:[e.jsx(P,{children:"Suppliers"}),e.jsx(C,{type:"text",name:"suppliers",value:d.suppliers,onChange:l,required:!0})]}),e.jsxs(k,{children:[e.jsx(P,{children:"Price"}),e.jsx(C,{type:"number",name:"price",step:"0.01",value:d.price,onChange:l,required:!0})]}),e.jsx(L,{type:"submit",children:"Save"}),e.jsx(L,{type:"button",onClick:n,children:"Cancel"})]})]})})},Z=r.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1320px;
  }
`,ee=r.table`
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
`,te=r.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,re=r.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,oe=r.tbody``,I=r.tr``,w=r.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,g=r.td`
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
`,ne=r.button`
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
`,se=r.button`
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
`,ie=r.button`
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
`,de=({filter:a})=>{const[n,c]=i.useState([]),[x,d]=i.useState(!1),[h,l]=i.useState(!1),[m,u]=i.useState(null),[p,v]=i.useState(1),f=5;i.useEffect(()=>{(async()=>{try{const s=await S.get("https://e-pharmacy-backend-ez9m.onrender.com/api/products");console.log("Fetched products:",s.data),Array.isArray(s.data.products)?c(s.data.products):console.error("Unexpected response format:",s.data)}catch(s){console.error("Error fetching products:",s)}})()},[]);const M=t=>{c([t,...n])},q=t=>{u(t),l(!0)},E=async t=>{try{await S.delete(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${t}`),c(n.filter(s=>s._id!==t))}catch(s){console.error("Error deleting product:",s)}},z=a?n.filter(t=>t.name&&t.name.toLowerCase().includes(a.toLowerCase())):n,A=p*f,b=A-f,j=z.slice(b,A),o=t=>v(t);return e.jsxs(Z,{children:[e.jsxs(ie,{onClick:()=>d(!0),children:[e.jsx("div",{className:"circle",children:"+"}),"Add a new product"]}),e.jsxs(ee,{children:[e.jsx(te,{children:"All Products"}),e.jsx(re,{children:e.jsxs(I,{children:[e.jsx(w,{children:"Product Info"}),e.jsx(w,{children:"Category"}),e.jsx(w,{children:"Stock"}),e.jsx(w,{children:"Suppliers"}),e.jsx(w,{children:"Price"}),e.jsx(w,{children:"Action"})]})}),e.jsx(oe,{children:Array.isArray(j)&&j.length>0?j.map(t=>e.jsxs(I,{children:[e.jsx(g,{children:t.name}),e.jsx(g,{children:t.category}),e.jsx(g,{children:t.stock}),e.jsx(g,{children:t.suppliers}),e.jsx(g,{children:t.price}),e.jsx(g,{children:e.jsxs("span",{children:[e.jsx(ne,{onClick:()=>q(t),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-pencil"})})}),e.jsx(se,{onClick:()=>E(t._id),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-trash"})})})]})})]},t._id)):e.jsx(I,{children:e.jsx(g,{colSpan:"6",children:"No products available"})})})]}),x&&e.jsx(K,{isOpen:x,onClose:()=>d(!1),onAddProduct:M}),h&&e.jsx(X,{isOpen:h,onClose:()=>l(!1),product:m,onSave:t=>{S.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${t._id}`,t).then(s=>{console.log("Product updated successfully:",s.data),c(n.map(y=>y._id===t._id?t:y))}).catch(s=>{console.error("Error updating product:",s)}).finally(()=>{l(!1)})}}),e.jsx(F,{totalItems:z.length,itemsPerPage:f,currentPage:p,paginate:o})]})},le=()=>{const[a,n]=i.useState(""),c=x=>{n(x)};return e.jsxs(T,{children:[e.jsx(_,{handleFilter:c,placeholder:"Product Name"}),e.jsx(de,{filter:a})]})};export{le as default};
