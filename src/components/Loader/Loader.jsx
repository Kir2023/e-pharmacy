import { Hourglass } from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <Wrapper>
      <Hourglass
        visible={true}
        height="180"
        width="180"
        ariaLabel="hourglass-loading"
        colors={["var(--main-color)", "var(--active-color)"]}
      />
    </Wrapper>
  );
};

export default Loader;
