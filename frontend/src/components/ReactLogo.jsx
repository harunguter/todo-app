import reactLogo from "../assets/react.svg";

const ReactLogo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 36,
      }}
    >
      <img src={reactLogo} alt="React Logo" className="react-logo" width={64} />
    </div>
  );
};

export default ReactLogo;
