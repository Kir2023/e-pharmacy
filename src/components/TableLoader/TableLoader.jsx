import { Dot, Loader } from "./TableLoader.styled";

const TableLoader = () => {
  return (
    <Loader>
      <Dot $delay="0s" />
      <Dot $delay="0.2s" />
      <Dot $delay="0.4s" />
    </Loader>
  );
};

export default TableLoader;
