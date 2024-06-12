/* eslint-disable react/prop-types */
import { Button, Icon } from "./LogoutBtn.styled";

const LogoutBtn = ({ onLogout }) => {
  return (
    <Button type="button" onClick={onLogout} className="logout-btn">
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
