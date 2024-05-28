/* eslint-disable react/prop-types */
import { Title } from "./Title.styled";

const PageTitle = ({ title, forwardRef }) => {
  return <Title ref={forwardRef}>{title}</Title>;
};

export default PageTitle;