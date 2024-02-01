import "./App.css";
import { MainButton } from "./components/MainButton/MainButton";
import { CustomIcon } from "./components/CustomIcon/CustomIcon";

function App() {
  return (
    // MainButton for Landing Page
    <div
      style={{
        flexDirection: "column",
        gap: "1em",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <MainButton section="landing">
        Find out More
        <span>
          <CustomIcon
            name="ep:arrow-right-bold"
            style={{ color: "#a06056", fontSize: "13px" }}
          />
        </span>
      </MainButton>

      <div>
        <MainButton section="product">Buy Now</MainButton>
      </div>

      <MainButton variant={true} section="product">
        Add to Cart
      </MainButton>
    </div>
  );
}

export default App;
