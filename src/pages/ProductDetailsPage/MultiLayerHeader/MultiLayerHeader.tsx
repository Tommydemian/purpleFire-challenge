import { TopBar } from "./TopBar/TopBar";
import { GlobalNav } from "./GlobalNav/GlobalNav";
import { GlobalToolBox } from "./GlobalToolBox/GlobalToolBox";

import styles from "./MultiLayerHeader.module.css";

export const MultiLayerHeader = () => {
  return (
    <header>
      <TopBar />
      <GlobalNav />
      <GlobalToolBox />
    </header>
  );
};
