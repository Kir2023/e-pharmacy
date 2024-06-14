import{p as t,a as O,r as s,j as e,d as N,n as d,e as L,b as H,h as _,i as $,C as W}from"./index-BhDmYLhS.js";import{P as K,u as R,U}from"./useFilter-DHxwx7ml.js";import{T as V}from"./TableLoader-B9ofIuCv.js";const Y=t.div`
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
`,G=t.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  margin-top: 40px;
`,J=t.div`
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
`,Q=t.button`
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
`,X=t.form`
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

  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
  }

  @media screen and (min-width: 768px) {
    width: 224px;
  }
`,Z=t.div`
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
`,ee=t.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`,D=t.button`
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
`,F=["Medicine","Head","Hand","Heart","Leg","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],te=({isOpen:a,onClose:i})=>{const g=O(),[f,c]=s.useState(""),[u,w]=s.useState(F[0]),[m,p]=s.useState(""),[b,k]=s.useState(""),[h,y]=s.useState(""),[r,l]=s.useState(!1),P=async o=>{o.preventDefault();const E={name:f,category:u,stock:m,suppliers:b,price:h};try{const z=await g(N(E));N.fulfilled.match(z)?(d.Notify.success("Product added successfully"),i()):d.Notify.failure("Failed to add product")}catch{d.Notify.failure("Error adding product")}},T=o=>{o.target===o.currentTarget&&a&&i()},C=o=>{o.key==="Escape"&&i()};s.useEffect(()=>(a?window.addEventListener("keydown",C):window.removeEventListener("keydown",C),()=>{window.removeEventListener("keydown",C)}),[a]);const S=()=>{l(o=>!o)};return s.useEffect(()=>{const o=E=>{E.target.closest("select")||l(!1)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[]),a&&e.jsx(Y,{onClick:T,children:e.jsxs(J,{children:[e.jsx(G,{children:"Add a new product"}),e.jsx(Q,{onClick:i,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-cross"})})}),e.jsxs(X,{onSubmit:P,children:[e.jsx(A,{type:"text",value:f,onChange:o=>c(o.target.value),placeholder:"Product Info",required:!0}),e.jsxs(Z,{onClick:S,children:[e.jsx("select",{value:u,onChange:o=>w(o.target.value),required:!0,children:F.map(o=>e.jsx("option",{value:o,children:o},o))}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`./sprite.svg#icon-chevron-${r?"up":"down"}`})})]}),e.jsx(A,{type:"number",step:"1",min:"1",value:m,onChange:o=>p(o.target.value),placeholder:"Stock",required:!0}),e.jsx(A,{type:"text",value:b,onChange:o=>k(o.target.value),placeholder:"Suppliers",required:!0}),e.jsx(A,{type:"number",step:"0.01",min:"0.01",value:h,onChange:o=>y(o.target.value),placeholder:"Price",required:!0}),e.jsxs(ee,{children:[e.jsx(D,{type:"submit",children:"Add"}),e.jsx(D,{type:"button",onClick:i,children:"Cancel"})]})]})]})})},oe=t.div`
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
`,re=t.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  margin-top: 40px;
`,ne=t.div`
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
`,ie=t.button`
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
`,se=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,B=t.input`
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
`,de=t.div`
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
`,ae=t.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`,q=t.button`
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
`,ce=["Medicine","Head","Hand","Heart","Leg","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],le=({isOpen:a,onClose:i,product:g})=>{const f=O(),[c,u]=s.useState({name:"",category:"",stock:0,suppliers:"",price:0}),[w,m]=s.useState(!1);s.useEffect(()=>{u(g)},[g]);const p=r=>{const{name:l,value:P}=r.target;u({...c,[l]:P})},b=async r=>{r.preventDefault();try{const l=await f(L(c));L.fulfilled.match(l)?(d.Notify.success("Product updated successfully"),i()):d.Notify.failure("Failed to update product")}catch{d.Notify.failure("Error updating product:")}},k=r=>{r.target===r.currentTarget&&a&&i()},h=r=>{r.key==="Escape"&&i()};s.useEffect(()=>(a?window.addEventListener("keydown",h):window.removeEventListener("keydown",h),()=>{window.removeEventListener("keydown",h)}),[a]);const y=()=>{m(r=>!r)};return s.useEffect(()=>{const r=l=>{l.target.closest("select")||m(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[]),a&&e.jsx(oe,{onClick:k,children:e.jsxs(ne,{children:[e.jsx(re,{children:"Edit product"}),e.jsx(ie,{onClick:i,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-cross"})})}),e.jsxs(se,{onSubmit:b,children:[e.jsx(B,{type:"text",name:"name",value:c.name,onChange:p,required:!0}),e.jsxs(de,{onClick:y,children:[e.jsx("select",{name:"category",value:c.category,onChange:p,required:!0,children:ce.map(r=>e.jsx("option",{value:r,children:r},r))}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`./sprite.svg#icon-chevron-${w?"up":"down"}`})})]}),e.jsx(B,{type:"number",name:"stock",value:c.stock,onChange:p,required:!0}),e.jsx(B,{type:"text",name:"suppliers",value:c.suppliers,onChange:p,required:!0}),e.jsx(B,{type:"number",name:"price",step:"0.01",value:c.price,onChange:p,required:!0}),e.jsxs(ae,{children:[e.jsx(q,{type:"submit",children:"Save"}),e.jsx(q,{type:"button",onClick:i,children:"Cancel"})]})]})]})})},pe=t.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1320px;
  }
`,xe=t.table`
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
`,ue=t.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,he=t.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,ge=t.tbody``,M=t.tr``,j=t.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,v=t.td`
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
`,fe=t.button`
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
`,we=t.button`
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
`,me=t.button`
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
`,be=({filter:a})=>{const i=O(),g=H(n=>n.products.items),[f,c]=s.useState(!1),[u,w]=s.useState(!1),[m,p]=s.useState(null),[b,k]=s.useState(1),[h,y]=s.useState(!0),r=5;s.useEffect(()=>{(async()=>{y(!0),await i(_()),y(!1)})()},[i]);const l=async n=>{try{const x=await i(N(n));N.fulfilled.match(x)?d.Notify.success("Product added successfully"):d.Notify.failure("Failed to add product:",x.payload)}catch{d.Notify.failure("Error adding product")}c(!1)},P=n=>{p(n),w(!0)},T=async n=>{try{const x=await i(L(n));L.fulfilled.match(x)?d.Notify.success("Product updated successfully"):d.Notify.failure("Failed to update product")}catch{d.Notify.failure("Error updating product")}w(!1)},C=async n=>{try{const x=await i($(n));$.fulfilled.match(x)?d.Notify.success("Product deleted successfully"):d.Notify.failure("Failed to delete product")}catch{d.Notify.failure("Error deleting product")}},S=a?g.filter(n=>n.name&&n.name.toLowerCase().includes(a.toLowerCase())):g,o=b*r,E=o-r,z=S.slice(E,o),I=n=>k(n);return e.jsxs(pe,{children:[e.jsxs(me,{onClick:()=>c(!0),children:[e.jsx("div",{className:"circle",children:"+"}),"Add a new product"]}),e.jsxs(xe,{children:[e.jsx(ue,{children:"All Products"}),e.jsx(he,{children:e.jsxs(M,{children:[e.jsx(j,{children:"Product Info"}),e.jsx(j,{children:"Category"}),e.jsx(j,{children:"Stock"}),e.jsx(j,{children:"Suppliers"}),e.jsx(j,{children:"Price"}),e.jsx(j,{children:"Action"})]})}),e.jsx(ge,{children:h?e.jsx(M,{children:e.jsx(v,{colSpan:"6",style:{textAlign:"center"},children:e.jsx(V,{})})}):z.map(n=>e.jsxs(M,{children:[e.jsx(v,{children:n.name}),e.jsx(v,{children:n.category}),e.jsx(v,{children:n.stock}),e.jsx(v,{children:n.suppliers}),e.jsx(v,{children:n.price}),e.jsx(v,{children:e.jsxs("span",{children:[e.jsx(fe,{onClick:()=>P(n),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-pencil"})})}),e.jsx(we,{onClick:()=>C(n._id),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-trash"})})})]})})]},n._id))})]}),f&&e.jsx(te,{isOpen:f,onClose:()=>c(!1),onAddProduct:l}),u&&e.jsx(le,{isOpen:u,onClose:()=>w(!1),product:m,onSave:T}),S.length>r&&e.jsx(K,{totalItems:S.length,itemsPerPage:r,currentPage:b,paginate:I})]})},ke=()=>{const{filter:a,handleFilter:i}=R();return e.jsxs(W,{children:[e.jsx(U,{handleFilter:i,placeholder:"Product Name"}),e.jsx(be,{filter:a})]})};export{ke as default};
