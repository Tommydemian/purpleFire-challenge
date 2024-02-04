import { CustomIcon } from "../../../../../components/Common/CustomIcon/CustomIcon";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <form className={styles.container}>
      <input
        className={styles.input}
        placeholder="Search Products"
        type="search"
      />
      <button className={styles.button} type="submit">
        <CustomIcon
          name="material-symbols-light:search"
          style={{ color: "#fff" }}
        />
      </button>
    </form>
  );
};
