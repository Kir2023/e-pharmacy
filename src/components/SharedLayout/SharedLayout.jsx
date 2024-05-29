import Header from '../Header/Header';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <SidebarMenu />
      {/* <ContentContainer>
        <Outlet />
      </ContentContainer> */}
    </>
  );
};

export default SharedLayout;
