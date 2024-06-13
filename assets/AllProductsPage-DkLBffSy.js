import{p as t,a as M,r as s,j as e,d as B,e as N,b as D,h as I,i as O,C as H}from"./index-D_AUEuKE.js";import{n as d}from"./notiflix-aio-3.2.7.min-_ovUro6A.js";import{P as _,u as W,U as K}from"./useFilter-CU6qgTKm.js";const R=t.div`
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
`,U=t.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  margin-top: 40px;
`,V=t.div`
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
`,Y=t.button`
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
`,G=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,z=t.input`
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
`,J=t.div`
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

    > option {
      background: var(--main-color);
      color: rgba(255, 255, 255, 0.5);
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
`,Q=t.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`,$=t.button`
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
`,F=["Medicine","Head","Hand","Heart","Leg","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],X=({isOpen:a,onClose:i})=>{const g=M(),[f,c]=s.useState(""),[h,w]=s.useState(F[0]),[m,x]=s.useState(""),[b,k]=s.useState(""),[l,P]=s.useState(""),[n,p]=s.useState(!1),C=async o=>{o.preventDefault();const S={name:f,category:h,stock:m,suppliers:b,price:l};try{const r=await g(B(S));B.fulfilled.match(r)?(d.Notify.success("Product added successfully"),i()):d.Notify.failure("Failed to add product")}catch{d.Notify.failure("Error adding product")}},E=o=>{o.target===o.currentTarget&&a&&i()},v=o=>{o.key==="Escape"&&i()};s.useEffect(()=>(a?window.addEventListener("keydown",v):window.removeEventListener("keydown",v),()=>{window.removeEventListener("keydown",v)}),[a]);const L=()=>{p(o=>!o)};return s.useEffect(()=>{const o=S=>{S.target.closest("select")||p(!1)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[]),a&&e.jsx(R,{onClick:E,children:e.jsxs(V,{children:[e.jsx(U,{children:"Add a new product"}),e.jsx(Y,{onClick:i,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-cross"})})}),e.jsxs(G,{onSubmit:C,children:[e.jsx(z,{type:"text",value:f,onChange:o=>c(o.target.value),placeholder:"Product Info",required:!0}),e.jsxs(J,{onClick:L,children:[e.jsx("select",{value:h,onChange:o=>w(o.target.value),required:!0,children:F.map(o=>e.jsx("option",{value:o,children:o},o))}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`./sprite.svg#icon-chevron-${n?"up":"down"}`})})]}),e.jsx(z,{type:"number",step:"1",min:"1",value:m,onChange:o=>x(o.target.value),placeholder:"Stock",required:!0}),e.jsx(z,{type:"text",value:b,onChange:o=>k(o.target.value),placeholder:"Suppliers",required:!0}),e.jsx(z,{type:"number",step:"0.01",min:"0.01",value:l,onChange:o=>P(o.target.value),placeholder:"Price",required:!0}),e.jsxs(Q,{children:[e.jsx($,{type:"submit",children:"Add"}),e.jsx($,{type:"button",onClick:i,children:"Cancel"})]})]})]})})},Z=t.div`
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
`,ee=t.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  margin-top: 40px;
`,te=t.div`
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
`,oe=t.button`
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
`,re=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,A=t.input`
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

  @media screen and (min-width: 768px) {
    width: 224px;
  }
`,ne=t.div`
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

    > option {
      background: var(--main-color);
      color: rgba(255, 255, 255, 0.5);
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
`,ie=t.div`
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
`,se=["Medicine","Head","Hand","Heart","Leg","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],de=({isOpen:a,onClose:i,product:g})=>{const f=M(),[c,h]=s.useState({name:"",category:"",stock:0,suppliers:"",price:0}),[w,m]=s.useState(!1);s.useEffect(()=>{h(g)},[g]);const x=n=>{const{name:p,value:C}=n.target;h({...c,[p]:C})},b=async n=>{n.preventDefault();try{const p=await f(N(c));N.fulfilled.match(p)?(d.Notify.success("Product updated successfully"),i()):d.Notify.failure("Failed to update product")}catch{d.Notify.failure("Error updating product:")}},k=n=>{n.target===n.currentTarget&&a&&i()},l=n=>{n.key==="Escape"&&i()};s.useEffect(()=>(a?window.addEventListener("keydown",l):window.removeEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}),[a]);const P=()=>{m(n=>!n)};return s.useEffect(()=>{const n=p=>{p.target.closest("select")||m(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[]),a&&e.jsx(Z,{onClick:k,children:e.jsxs(te,{children:[e.jsx(ee,{children:"Edit product"}),e.jsx(oe,{onClick:i,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-cross"})})}),e.jsxs(re,{onSubmit:b,children:[e.jsx(A,{type:"text",name:"name",value:c.name,onChange:x,required:!0}),e.jsxs(ne,{onClick:P,children:[e.jsx("select",{name:"category",value:c.category,onChange:x,required:!0,children:se.map(n=>e.jsx("option",{value:n,children:n},n))}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`./sprite.svg#icon-chevron-${w?"up":"down"}`})})]}),e.jsx(A,{type:"number",name:"stock",value:c.stock,onChange:x,required:!0}),e.jsx(A,{type:"text",name:"suppliers",value:c.suppliers,onChange:x,required:!0}),e.jsx(A,{type:"number",name:"price",step:"0.01",value:c.price,onChange:x,required:!0}),e.jsxs(ie,{children:[e.jsx(T,{type:"submit",children:"Save"}),e.jsx(T,{type:"button",onClick:i,children:"Cancel"})]})]})]})})},ae=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1320px;
  }
`,ce=t.table`
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
`,le=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,pe=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,xe=t.tbody``,q=t.tr``,y=t.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,j=t.td`
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
`,ue=t.button`
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
`,he=t.button`
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
`,ge=t.button`
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
`,fe=({filter:a})=>{const i=M(),g=D(r=>r.products.items),[f,c]=s.useState(!1),[h,w]=s.useState(!1),[m,x]=s.useState(null),[b,k]=s.useState(1),l=5;s.useEffect(()=>{i(I())},[i]);const P=async r=>{try{const u=await i(B(r));B.fulfilled.match(u)?d.Notify.success("Product added successfully"):d.Notify.failure("Failed to add product:",u.payload)}catch{d.Notify.failure("Error adding product")}c(!1)},n=r=>{x(r),w(!0)},p=async r=>{try{const u=await i(N(r));N.fulfilled.match(u)?d.Notify.success("Product updated successfull"):d.Notify.failure("Failed to update product")}catch{d.Notify.failure("Error updating product")}w(!1)},C=async r=>{try{const u=await i(O(r));O.fulfilled.match(u)?d.Notify.success("Product deleted successfully"):d.Notify.failure("Failed to delete product")}catch{d.Notify.failure("Error deleting product")}},E=a?g.filter(r=>r.name&&r.name.toLowerCase().includes(a.toLowerCase())):g,v=b*l,L=v-l,o=E.slice(L,v),S=r=>k(r);return e.jsxs(ae,{children:[e.jsxs(ge,{onClick:()=>c(!0),children:[e.jsx("div",{className:"circle",children:"+"}),"Add a new product"]}),e.jsxs(ce,{children:[e.jsx(le,{children:"All Products"}),e.jsx(pe,{children:e.jsxs(q,{children:[e.jsx(y,{children:"Product Info"}),e.jsx(y,{children:"Category"}),e.jsx(y,{children:"Stock"}),e.jsx(y,{children:"Suppliers"}),e.jsx(y,{children:"Price"}),e.jsx(y,{children:"Action"})]})}),e.jsx(xe,{children:o.map(r=>e.jsxs(q,{children:[e.jsx(j,{children:r.name}),e.jsx(j,{children:r.category}),e.jsx(j,{children:r.stock}),e.jsx(j,{children:r.suppliers}),e.jsx(j,{children:r.price}),e.jsx(j,{children:e.jsxs("span",{children:[e.jsx(ue,{onClick:()=>n(r),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-pencil"})})}),e.jsx(he,{onClick:()=>C(r._id),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-trash"})})})]})})]},r._id))})]}),f&&e.jsx(X,{isOpen:f,onClose:()=>c(!1),onAddProduct:P}),h&&e.jsx(de,{isOpen:h,onClose:()=>w(!1),product:m,onSave:p}),E.length>l&&e.jsx(_,{totalItems:E.length,itemsPerPage:l,currentPage:b,paginate:S})]})},ve=()=>{const{filter:a,handleFilter:i}=W();return e.jsxs(H,{children:[e.jsx(K,{handleFilter:i,placeholder:"Product Name"}),e.jsx(fe,{filter:a})]})};export{ve as default};
