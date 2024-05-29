import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarContainer, MenuItem, Icon, ToggleButton, Overlay, MenuList } from './SidebarMenu.styled';
import sprite from '../../../public/sprite.svg';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <ToggleButton onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <use href={`${sprite}#icon-burger`} />
          </svg>
        </ToggleButton>
      )}
      {isOpen && <Overlay onClick={toggleSidebar} />}
      <SidebarContainer className={isOpen ? 'open' : ''}>
        {isOpen && (
          <ToggleButton onClick={toggleSidebar} className="close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <use href={`${sprite}#icon-cross`} />
            </svg>
          </ToggleButton>
        )}
        <MenuList>
        <MenuItem>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Icon>
              <svg viewBox="0 0 32 32">
                <use href={`${sprite}#icon-dashboard`} />
              </svg>
            </Icon>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/orders" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Icon>
              <svg viewBox="0 0 32 32">
                <use href={`${sprite}#icon-orders`} />
              </svg>
            </Icon>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Icon>
              <svg viewBox="0 0 32 32">
                <use href={`${sprite}#icon-products`} />
              </svg>
            </Icon>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/customers" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Icon>
              <svg viewBox="0 0 32 32">
                <use href={`${sprite}#icon-customers`} />
              </svg>
            </Icon>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/suppliers" className={({ isActive }) => (isActive ? 'active' : '')}>
            <Icon>
              <svg viewBox="0 0 32 32">
                <use href={`${sprite}#icon-suppliers`} />
              </svg>
            </Icon>
          </NavLink>
        </MenuItem>
        </MenuList>
      </SidebarContainer>
    </>
  );
};

export default SidebarMenu;
