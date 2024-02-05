import { TopBar } from "./TopBar/TopBar";
import { GlobalNav } from "./GlobalNav/GlobalNav";
import { GlobalToolBox } from "./GlobalToolBox/GlobalToolBox";

export const MultiLayerHeader = () => {
  return (
    <header>
      <TopBar />
      <GlobalNav />
      <GlobalToolBox />
    </header>
  );
};
