import{r,j as e}from"./index-Jt_K3z4p.js";import{a as c}from"./axios-B4uVmeYG.js";const m=()=>{const[a,o]=r.useState([]);return r.useEffect(()=>{(async()=>{try{const t=await c.get("https://e-pharmacy-backend-ez9m.onrender.com/api/customers");o(t.data)}catch(t){console.error("Error fetching customers:",t)}})()},[]),e.jsxs("div",{children:[e.jsx("h1",{children:"Customers Data"}),e.jsx("ul",{children:a.map(s=>e.jsxs("li",{children:[s.name," - ",s.email]},s._id))})]})};export{m as default};
