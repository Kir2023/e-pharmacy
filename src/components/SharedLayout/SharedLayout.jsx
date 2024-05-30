import Header from "../Header/Header";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import { Outlet } from "react-router-dom";
import { MainContent } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <SidebarMenu />
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
};

export default SharedLayout;
