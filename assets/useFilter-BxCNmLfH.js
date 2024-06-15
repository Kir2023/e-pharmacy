import{p as o,j as e,r as p}from"./index-DDfpZsUr.js";const c=o.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 614px;
  }

  @media screen and (min-width: 1440px) {
    width: 1280px;
  }
`,x=o.button`
  width: 9.5px;
  height: 9.5px;
  background-color: #e7f1ed;
  border: none;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;

  &.active {
    background-color: var(--main-color);
  }

  &:hover {
    background-color: var(--active-color);
  }
`,m=({totalItems:t,itemsPerPage:i,currentPage:n,paginate:a})=>{const s=[];for(let r=1;r<=Math.ceil(t/i);r++)s.push(r);return e.jsx(c,{children:s.map(r=>e.jsx(x,{className:n===r?"active":"",onClick:()=>a(r)},r))})},l=o.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  max-width: 300px;
  margin: 20px 0;
`,g=o.input`
  width: 215px;
  height: 44px;
  padding: 13px 18px;
  background-color: var(--background-color);
  border: 1px solid rgba(29, 30, 33, 0.1);
  box-shadow: 0px -1px 5px rgba(71, 71, 71, 0.05);
  border-radius: 60px;
  font-size: 14px;
  color: var(--main-text-color);
  box-sizing: border-box;

  &::placeholder {
    color: rgba(29, 30, 33, 0.4);
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 224px;
  }
`,h=o.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 30px;
  background-color: var(--main-color);
  color: var(--background-color);
  border: none;
  border-radius: 60px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: var(--active-color);
  }

  svg {
    fill: none;
    stroke: currentColor;
    width: 14px;
    height: 14px;
  }
`;o.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  width: 100%;
`;o.li`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 4px;
  font-size: 14px;
`;const b=({handleFilter:t,placeholder:i})=>{const[n,a]=p.useState(""),s=d=>{a(d.target.value)},r=d=>{d.key==="Enter"&&t(n)};return e.jsxs(l,{children:[e.jsx(g,{type:"text",value:n,onChange:s,onKeyDown:r,placeholder:i}),e.jsxs(h,{onClick:()=>t(n),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:e.jsx("use",{href:"./sprite.svg#icon-filter"})}),"Filter"]})]})},v=()=>{const[t,i]=p.useState("");return{filter:t,handleFilter:a=>{i(a)}}};export{m as P,b as U,v as u};
