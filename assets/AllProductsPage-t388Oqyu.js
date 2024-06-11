import{p as r,r as i,j as e,b as E,C as T}from"./index-DoQj_Gun.js";import{P as q,U as I}from"./Filter-C9_vPiB3.js";const D=r.div`
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
`,$=r.button`
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
`,M=["Medicine","Head","Hand","Heart","Leg","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],K=({isOpen:a,onClose:s,onAddProduct:p})=>{const[h,c]=i.useState(""),[g,f]=i.useState(M[0]),[m,u]=i.useState(""),[w,y]=i.useState(""),[x,C]=i.useState(""),[n,l]=i.useState(!1),v=async o=>{o.preventDefault();const t={name:h,category:g,stock:m,suppliers:w,price:x};try{const S=(await E.post("https://e-pharmacy-backend-ez9m.onrender.com/api/products",t)).data;console.log("Added product:",S),p(S),s()}catch(d){console.error("Error adding product:",d)}},z=o=>{o.target===o.currentTarget&&a&&s()},j=o=>{o.key==="Escape"&&s()};i.useEffect(()=>(a?window.addEventListener("keydown",j):window.removeEventListener("keydown",j),()=>{window.removeEventListener("keydown",j)}),[j,a]);const P=()=>{l(o=>!o)};return i.useEffect(()=>{const o=t=>{t.target.closest("select")||l(!1)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[]),a&&e.jsx(D,{onClick:z,children:e.jsxs(F,{children:[e.jsx(H,{children:"Add a new product"}),e.jsx(_,{onClick:s,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-cross"})})}),e.jsxs(N,{onSubmit:v,children:[e.jsx(A,{type:"text",value:h,onChange:o=>c(o.target.value),placeholder:"Product Info",required:!0}),e.jsxs(W,{onClick:P,children:[e.jsx("select",{value:g,onChange:o=>f(o.target.value),required:!0,children:M.map(o=>e.jsx("option",{value:o,children:o},o))}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`./sprite.svg#icon-chevron-${n?"up":"down"}`})})]}),e.jsx(A,{type:"number",step:"1",min:"1",value:m,onChange:o=>u(o.target.value),placeholder:"Stock",required:!0}),e.jsx(A,{type:"text",value:w,onChange:o=>y(o.target.value),placeholder:"Suppliers",required:!0}),e.jsx(A,{type:"number",step:"0.01",min:"0.01",value:x,onChange:o=>C(o.target.value),placeholder:"Price",required:!0}),e.jsxs(U,{children:[e.jsx($,{type:"submit",children:"Add"}),e.jsx($,{type:"button",onClick:s,children:"Cancel"})]})]})]})})},R=r.div`
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
`,V=r.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--main-text-color);
  margin-top: 40px;
`,Y=r.div`
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
`,Z=["Medicine","Head","Hand","Heart","Leg","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"],ee=({isOpen:a,onClose:s,product:p,onSave:h})=>{const[c,g]=i.useState({name:"",category:"",stock:0,suppliers:"",price:0}),[f,m]=i.useState(!1);i.useEffect(()=>{g(p)},[p]);const u=n=>{const{name:l,value:v}=n.target;g({...c,[l]:v})},w=async n=>{n.preventDefault();try{const l=await E.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${c._id}`,c);console.log("Product updated successfully:",l.data),h(c),s()}catch(l){console.error("Error updating product:",l)}},y=n=>{n.target===n.currentTarget&&a&&s()},x=n=>{n.key==="Escape"&&s()};i.useEffect(()=>(a?window.addEventListener("keydown",x):window.removeEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}),[x,a]);const C=()=>{m(n=>!n)};return i.useEffect(()=>{const n=l=>{l.target.closest("select")||m(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[]),a&&e.jsx(R,{onClick:y,children:e.jsxs(Y,{children:[e.jsx(V,{children:"Edit product"}),e.jsx(G,{onClick:s,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-cross"})})}),e.jsxs(J,{onSubmit:w,children:[e.jsx(B,{type:"text",name:"name",value:c.name,onChange:u,required:!0}),e.jsxs(Q,{onClick:C,children:[e.jsx("select",{name:"category",value:c.category,onChange:u,required:!0,children:Z.map(n=>e.jsx("option",{value:n,children:n},n))}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:`./sprite.svg#icon-chevron-${f?"up":"down"}`})})]}),e.jsx(B,{type:"number",name:"stock",value:c.stock,onChange:u,required:!0}),e.jsx(B,{type:"text",name:"suppliers",value:c.suppliers,onChange:u,required:!0}),e.jsx(B,{type:"number",name:"price",step:"0.01",value:c.price,onChange:u,required:!0}),e.jsxs(X,{children:[e.jsx(O,{type:"submit",children:"Save"}),e.jsx(O,{type:"button",onClick:s,children:"Cancel"})]})]})]})})},te=r.div`
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
`,ie=r.tbody``,L=r.tr``,k=r.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`,b=r.td`
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
`,de=r.button`
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
`,ae=r.button`
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
`,ce=({filter:a})=>{const[s,p]=i.useState([]),[h,c]=i.useState(!1),[g,f]=i.useState(!1),[m,u]=i.useState(null),[w,y]=i.useState(1),x=5;i.useEffect(()=>{(async()=>{try{const d=await E.get("https://e-pharmacy-backend-ez9m.onrender.com/api/products");console.log("Fetched products:",d.data),Array.isArray(d.data.products)?p(d.data.products):console.error("Unexpected response format:",d.data)}catch(d){console.error("Error fetching products:",d)}})()},[]);const C=t=>{p([t,...s])},n=t=>{u(t),f(!0)},l=async t=>{try{await E.delete(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${t}`),p(s.filter(d=>d._id!==t))}catch(d){console.error("Error deleting product:",d)}},v=a?s.filter(t=>t.name&&t.name.toLowerCase().includes(a.toLowerCase())):s,z=w*x,j=z-x,P=v.slice(j,z),o=t=>y(t);return e.jsxs(te,{children:[e.jsxs(ae,{onClick:()=>c(!0),children:[e.jsx("div",{className:"circle",children:"+"}),"Add a new product"]}),e.jsxs(re,{children:[e.jsx(oe,{children:"All Products"}),e.jsx(ne,{children:e.jsxs(L,{children:[e.jsx(k,{children:"Product Info"}),e.jsx(k,{children:"Category"}),e.jsx(k,{children:"Stock"}),e.jsx(k,{children:"Suppliers"}),e.jsx(k,{children:"Price"}),e.jsx(k,{children:"Action"})]})}),e.jsx(ie,{children:Array.isArray(P)&&P.length>0?P.map(t=>e.jsxs(L,{children:[e.jsx(b,{children:t.name}),e.jsx(b,{children:t.category}),e.jsx(b,{children:t.stock}),e.jsx(b,{children:t.suppliers}),e.jsx(b,{children:t.price}),e.jsx(b,{children:e.jsxs("span",{children:[e.jsx(se,{onClick:()=>n(t),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-pencil"})})}),e.jsx(de,{onClick:()=>l(t._id),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-trash"})})})]})})]},t._id)):e.jsx(L,{children:e.jsx(b,{colSpan:"6",children:"No products available"})})})]}),h&&e.jsx(K,{isOpen:h,onClose:()=>c(!1),onAddProduct:C}),g&&e.jsx(ee,{isOpen:g,onClose:()=>f(!1),product:m,onSave:t=>{E.put(`https://e-pharmacy-backend-ez9m.onrender.com/api/products/${t._id}`,t).then(d=>{console.log("Product updated successfully:",d.data),p(s.map(S=>S._id===t._id?t:S))}).catch(d=>{console.error("Error updating product:",d)}).finally(()=>{f(!1)})}}),e.jsx(q,{totalItems:v.length,itemsPerPage:x,currentPage:w,paginate:o})]})},xe=()=>{const[a,s]=i.useState(""),p=h=>{s(h)};return e.jsxs(T,{children:[e.jsx(I,{handleFilter:p,placeholder:"Product Name"}),e.jsx(ce,{filter:a})]})};export{xe as default};
