import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "inline-block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;
