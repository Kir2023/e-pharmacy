import{p as r,r as i,j as e,b as P,C as q}from"./index-BiKtfBhu.js";import{P as T,U as I}from"./Filter-SwZqcDwd.js";const H=r.div`
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
`,D=r.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  margin-top: 40px;
`,F=r.div`
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
`,_=r.button`
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
`,N=r.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,A=r.input`
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
`,U=r.div`
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
`,L=["Medicine","Head","Hand","Heart","Leg","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],R=({isOpen:c,onClose:s,onAddProduct:l})=>{const[x,d]=i.useState(""),[u,g]=i.useState(L[0]),[m,h]=i.useState(""),[f,j]=i.useState(""),[n,p]=i.useState(""),[k,S]=i.useState(!1),E=async o=>{o.preventDefault();const t={name:x,category:u,stock:m,suppliers:f,price:n};try{const C=(await P.post("https://e-pharmacy-backend-ez9m.onrender.com/api/products",t)).data;console.log("Added product:",C),l(C),s()}catch(a){console.error("Error adding product:",a)}},z=o=>{o.target===o.currentTarget&&c&&s()},b=o=>{o.key==="Escape"&&s()};i.useEffect(()=>(c?window.addEventListener("keydown",b):window.removeEventListener("keydown",b),()=>{window.removeEventListener("keydown",b)}),[b,c]);const y=()=>{S(o=>!o)};return i.useEffect(()=>{const o=t=>{t.target.closest("select")||S(!1)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[]),c&&e.jsx(H,{onClick:z,children:e.jsxs(F,{children:[e.jsx(D,{children:"Add a new product"}),e.jsx(_,{onClick:s,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-cross"})})}),e.jsxs(N,{onSubmit:E,children:[e.jsx(A,{type:"text",value:x,onChange:o=>d(o.target.value),placeholder:"Product Info",required:!0}),e.jsxs(W,{onClick:y,children:[e.jsx("select",{value:u,onChange:o=>g(o.target.value),required:!0,children:L.map(o=>e.jsx("option",{value:o,children:o},o))}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`./sprite.svg#icon-chevron-${k?"up":"down"}`})})]}),e.jsx(A,{type:"number",step:"1",min:"1",value:m,onChange:o=>h(o.target.value),placeholder:"Stock",required:!0}),e.jsx(A,{type:"text",value:f,onChange:o=>j(o.target.value),placeholder:"Suppliers",required:!0}),e.jsx(A,{type:"number",step:"0.01",min:"0.01",value:n,onChange:o=>p(o.target.value),placeholder:"Price",required:!0}),e.jsxs(U,{children:[e.jsx(O,{type:"submit",children:"Add"}),e.jsx(O,{type:"button",onClick:s,children:"Cancel"})]})]})]})})},V=r.div`
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
`,Y=r.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  margin-top: 40px;
`,K=r.div`
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
`,G=r.button`
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
`,J=r.form`
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

  @media screen and (min-width: 768px) {
    width: 224px;
  }
`,Q=r.div`
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
`,X=r.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`,M=r.button`
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
`,Z=["Medicine","Head","Hand","Heart","Leg","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],ee=({isOpen:c,onClose:s,product:l,onSave:x})=>{const[d,u]=i.useState({name:"",category:"",stock:0,suppliers:"",price:0}),[g,m]=i.useState(!1);i.useEffect(()=>{u(l)},[l]);const h=n=>{const{name:p,value:k}=n.target;u({...d,[p]:k})},f=async n=>{n.preventDefault();try{const p=await P.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${d._id}`,d);console.log("Product updated successfully:",p.data),x(d),s()}catch(p){console.error("Error updating product:",p)}},j=()=>{m(n=>!n)};return i.useEffect(()=>{const n=p=>{p.target.closest("select")||m(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[]),c&&e.jsx(V,{children:e.jsxs(K,{children:[e.jsx(Y,{children:"Edit product"}),e.jsx(G,{onClick:s,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-cross"})})}),e.jsxs(J,{onSubmit:f,children:[e.jsx(B,{type:"text",name:"name",value:d.name,onChange:h,required:!0}),e.jsxs(Q,{onClick:j,children:[e.jsx("select",{name:"category",value:d.category,onChange:h,required:!0,children:Z.map(n=>e.jsx("option",{value:n,children:n},n))}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`./sprite.svg#icon-chevron-${g?"up":"down"}`})})]}),e.jsx(B,{type:"number",name:"stock",value:d.stock,onChange:h,required:!0}),e.jsx(B,{type:"text",name:"suppliers",value:d.suppliers,onChange:h,required:!0}),e.jsx(B,{type:"number",name:"price",step:"0.01",value:d.price,onChange:h,required:!0}),e.jsxs(X,{children:[e.jsx(M,{type:"submit",children:"Save"}),e.jsx(M,{type:"button",onClick:s,children:"Cancel"})]})]})]})})},te=r.div`
  max-width: 335px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1320px;
  }
`,re=r.table`
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
`,oe=r.caption`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 14px;
  background-color: #e7f1ed;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,ne=r.thead`
  color: rgba(29, 30, 33, 0.4);
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,ie=r.tbody``,$=r.tr``,v=r.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,w=r.td`
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
`,se=r.button`
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
`,ae=r.button`
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
`,de=r.button`
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
`,ce=({filter:c})=>{const[s,l]=i.useState([]),[x,d]=i.useState(!1),[u,g]=i.useState(!1),[m,h]=i.useState(null),[f,j]=i.useState(1),n=5;i.useEffect(()=>{(async()=>{try{const a=await P.get("https://e-pharmacy-backend-ez9m.onrender.com/api/products");console.log("Fetched products:",a.data),Array.isArray(a.data.products)?l(a.data.products):console.error("Unexpected response format:",a.data)}catch(a){console.error("Error fetching products:",a)}})()},[]);const p=t=>{l([t,...s])},k=t=>{h(t),g(!0)},S=async t=>{try{await P.delete(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${t}`),l(s.filter(a=>a._id!==t))}catch(a){console.error("Error deleting product:",a)}},E=c?s.filter(t=>t.name&&t.name.toLowerCase().includes(c.toLowerCase())):s,z=f*n,b=z-n,y=E.slice(b,z),o=t=>j(t);return e.jsxs(te,{children:[e.jsxs(de,{onClick:()=>d(!0),children:[e.jsx("div",{className:"circle",children:"+"}),"Add a new product"]}),e.jsxs(re,{children:[e.jsx(oe,{children:"All Products"}),e.jsx(ne,{children:e.jsxs($,{children:[e.jsx(v,{children:"Product Info"}),e.jsx(v,{children:"Category"}),e.jsx(v,{children:"Stock"}),e.jsx(v,{children:"Suppliers"}),e.jsx(v,{children:"Price"}),e.jsx(v,{children:"Action"})]})}),e.jsx(ie,{children:Array.isArray(y)&&y.length>0?y.map(t=>e.jsxs($,{children:[e.jsx(w,{children:t.name}),e.jsx(w,{children:t.category}),e.jsx(w,{children:t.stock}),e.jsx(w,{children:t.suppliers}),e.jsx(w,{children:t.price}),e.jsx(w,{children:e.jsxs("span",{children:[e.jsx(se,{onClick:()=>k(t),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-pencil"})})}),e.jsx(ae,{onClick:()=>S(t._id),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-trash"})})})]})})]},t._id)):e.jsx($,{children:e.jsx(w,{colSpan:"6",children:"No products available"})})})]}),x&&e.jsx(R,{isOpen:x,onClose:()=>d(!1),onAddProduct:p}),u&&e.jsx(ee,{isOpen:u,onClose:()=>g(!1),product:m,onSave:t=>{P.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${t._id}`,t).then(a=>{console.log("Product updated successfully:",a.data),l(s.map(C=>C._id===t._id?t:C))}).catch(a=>{console.error("Error updating product:",a)}).finally(()=>{g(!1)})}}),e.jsx(T,{totalItems:E.length,itemsPerPage:n,currentPage:f,paginate:o})]})},xe=()=>{const[c,s]=i.useState(""),l=x=>{s(x)};return e.jsxs(q,{children:[e.jsx(I,{handleFilter:l,placeholder:"Product Name"}),e.jsx(ce,{filter:c})]})};export{xe as default};
