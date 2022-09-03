import { TailSpin } from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";
export const Loader = () => {
  return (
    <Wrapper>
      <div>
        <TailSpin
          height="150"
          width="150"
          color="#081224"
          ariaLabel="loading-indicator"
        />
      </div>
    </Wrapper>
  );
};
