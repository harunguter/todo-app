import empty from "../../assets/images/empty.png";

const Empty = () => <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
  <div className="app-empty" style={{ backgroundImage: `url(${empty})` }}/>
</div>;

export default Empty;
