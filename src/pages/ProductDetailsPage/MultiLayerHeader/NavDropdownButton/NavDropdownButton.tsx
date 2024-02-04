import { CustomIcon } from "../../../../components/Common/CustomIcon/CustomIcon";
import styles from "./NavDropdownButton.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  leftIcon?: boolean;
  iconColor?: string;
};

export const NavDropdownButton: React.FC<Props> = ({
  leftIcon,
  label,
  className,
  iconColor = "#fff",
}) => {
  return (
    <button className={`${styles.navDropdownButton} ${className}`}>
      {leftIcon && (
        <CustomIcon name="ep:arrow-down" style={{ color: "#fff" }} />
      )}
      {label}
      <CustomIcon name="ep:arrow-down" style={{ color: iconColor }} />
    </button>
  );
};
