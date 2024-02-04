import { MainButton } from "../../../MainButton/MainButton";
import { CustomIcon } from "../../CustomIcon/CustomIcon";
import { sustainabilityData } from "../../../../data/LandingPage/sustainabilityMessageData";
import styles from "./SustainabilityMessage.module.css";

const { title, description, cta, image } = sustainabilityData;

export const SustainabilityMessage = () => {
  return (
    <article className={`flow flow-size-200 ${styles.articleContainer}`}>
      <h3 className={styles.title}>{title}</h3>
      <img src={image} alt={title} />
      <p className={styles.description}>{description}</p>
      <MainButton section="landing">
        {cta}
        <span>
          <CustomIcon name="ep:arrow-right-bold" style={{ color: "#A06056" }} />
        </span>
      </MainButton>
    </article>
  );
};
