// import { Outlet } from 'react-router-dom';
// import Header from '../Header/Header';
// import SidebarMenu from '../SidebarMenu/SidebarMenu';

// const SharedLayout = () => {
//   return (
//     <>
//       <Header />
//       <SidebarMenu />
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default SharedLayout;



// SharedLayout.jsx

import Header from '../Header/Header';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const MainContent = styled.main`
  margin-left: 250px; /* Same width as Sidebar */
  padding: 20px;
`;

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
