import{p as e,j as r,r as d}from"./index-BT9-VCbO.js";const x=e.div`
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
`,c=e.button`
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
`,u=({totalItems:n,itemsPerPage:a,currentPage:t,paginate:s})=>{const i=[];for(let o=1;o<=Math.ceil(n/a);o++)i.push(o);return r.jsx(x,{children:i.map(o=>r.jsx(c,{className:t===o?"active":"",onClick:()=>s(o)},o))})},l=e.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  max-width: 300px;
  margin: 20px 0;
`,g=e.input`
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
`,h=e.button`
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
`;e.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  width: 100%;
`;e.li`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 4px;
  font-size: 14px;
`;const m=({handleFilter:n,placeholder:a})=>{const[t,s]=d.useState(""),i=p=>{s(p.target.value)},o=p=>{p.key==="Enter"&&n(t)};return r.jsxs(l,{children:[r.jsx(g,{type:"text",value:t,onChange:i,onKeyDown:o,placeholder:a}),r.jsxs(h,{onClick:()=>n(t),children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:r.jsx("use",{href:"./sprite.svg#icon-filter"})}),"Filter"]})]})};export{u as P,m as U};
