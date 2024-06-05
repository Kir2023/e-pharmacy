import { Hourglass } from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <Wrapper>
      <Hourglass
        visible={true}
        height="100"
        width="100"
        ariaLabel="hourglass-loading"
        colors={["var(--main-color)", "var(--active-color)"]}
      />
    </Wrapper>
  );
};

export default Loader;
