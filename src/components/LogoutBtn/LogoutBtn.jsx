/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { Button, Icon } from "./LogoutBtn.styled";

const LogoutBtn = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await onLogout();
    navigate("/login");
  };

  return (
    <Button type="button" onClick={handleLogout} className="logout-btn">
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <use
            href="./sprite.svg#icon-logout"
            fill="var(--main-color)"
            className="icon-logout"
          />
        </svg>
      </Icon>
    </Button>
  );
};

export default LogoutBtn;
