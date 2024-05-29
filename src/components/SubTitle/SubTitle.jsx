/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { StyledLink, StyledText, Wrapper } from './SubTitle.styled';

const SubTitle = ({ text, forwardRef }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <Wrapper>
      <StyledLink ref={forwardRef} onClick={handleClick}>
        {text}
      </StyledLink>
      <StyledText>
        | vendor@gmail.com
      </StyledText>
    </Wrapper>
  );
};

export default SubTitle;
