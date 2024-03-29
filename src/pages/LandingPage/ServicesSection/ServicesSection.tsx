import { ServiceCard } from "./ServiceCard/ServiceCard";
import { MainButton } from "../../../components/MainButton/MainButton";
import { CustomIcon } from "../../../components/Common/CustomIcon/CustomIcon";
import { ServiceHeading } from "./ServiceHeading/ServiceHeading";
import styles from "./ServicesSection.module.css";

import {
  servicesData,
  ServiceItem,
} from "../../../data/LandingPage/servicesData";

export const ServicesSection = () => {
  return (
    <section
      id="services-section"
      className={`landing-container | padding-block-section ${styles.sectionContainer}`}
    >
      <div>
        <ServiceHeading />
        <div className="padding-block-500">
          <MainButton className={styles.cta} section="landing">
            Find out more
            <span>
              <CustomIcon
                name="ep:arrow-right-bold"
                style={{ color: "#A06056" }}
              />
            </span>
          </MainButton>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {servicesData.map((service: ServiceItem) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};
