import{p as o,j as r,r as d}from"./index-DRPtGp9A.js";const x=o.div`
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
`,c=o.button`
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
`,f=({totalItems:t,itemsPerPage:i,currentPage:n,paginate:a})=>{const s=[];for(let e=1;e<=Math.ceil(t/i);e++)s.push(e);return r.jsx(x,{children:s.map(e=>r.jsx(c,{className:n===e?"active":"",onClick:()=>a(e)},e))})},l=o.div`
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
  background-color: #ffffff;
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
  color: #ffffff;
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
`;const m=({handleFilter:t,placeholder:i})=>{const[n,a]=d.useState(""),s=p=>{a(p.target.value)},e=p=>{p.key==="Enter"&&t(n)};return r.jsxs(l,{children:[r.jsx(g,{type:"text",value:n,onChange:s,onKeyDown:e,placeholder:i}),r.jsxs(h,{onClick:()=>t(n),children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:r.jsx("use",{href:"./sprite.svg#icon-filter"})}),"Filter"]})]})},b=()=>{const[t,i]=d.useState("");return{filter:t,handleFilter:a=>{i(a)}}};export{f as P,m as U,b as u};
