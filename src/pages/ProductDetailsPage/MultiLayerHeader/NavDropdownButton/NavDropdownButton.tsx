import { CustomIcon } from "../../../../components/Common/CustomIcon/CustomIcon";
import styles from "./NavDropdownButton.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  leftIcon?: boolean;
  iconColor?: string;
  iconActive?: boolean;
  onIconClick?: () => void;
};

export const NavDropdownButton: React.FC<Props> = ({
  leftIcon,
  label,
  className,
  iconActive,
  onIconClick,
  iconColor = "#fff",
}) => {
  return (
    <button className={`${styles.navDropdownButton} ${className}`}>
      {leftIcon && (
        <CustomIcon name="ep:arrow-down" style={{ color: "#fff" }} />
      )}
      {label}
      {iconActive ? (
        <span onClick={onIconClick} style={{ cursor: "pointer" }}>
          <CustomIcon name="ep:arrow-down" style={{ color: iconColor }} />
        </span>
      ) : (
        <CustomIcon name="ep:arrow-down" style={{ color: iconColor }} />
      )}
    </button>
  );
};
