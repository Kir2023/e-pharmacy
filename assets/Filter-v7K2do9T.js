import{p as e,r as x,j as r}from"./index-CvTBbUrB.js";const d=e.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  max-width: 300px;
  margin: 20px 0;
`,l=e.input`
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
`,c=e.button`
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
`;const f=({handleFilter:n,placeholder:i})=>{const[o,s]=x.useState(""),p=t=>{s(t.target.value)},a=t=>{t.key==="Enter"&&n(o)};return r.jsxs(d,{children:[r.jsx(l,{type:"text",value:o,onChange:p,onKeyDown:a,placeholder:i}),r.jsxs(c,{onClick:()=>n(o),children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:r.jsx("use",{href:"./sprite.svg#icon-filter"})}),"Filter"]})]})};export{f as U};
