import { CustomIcon } from "../../../../components/Common/CustomIcon/CustomIcon";
import styles from "./NavDropdownButton.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  leftIcon?: boolean;
  iconColor?: string;
  iconActive?: boolean;
  onIconCLick?: () => void;
};

export const NavDropdownButton: React.FC<Props> = ({
  leftIcon,
  label,
  className,
  iconActive,
  onIconCLick,
  iconColor = "#fff",
}) => {
  return (
    <button className={`${styles.navDropdownButton} ${className}`}>
      {leftIcon && (
        <CustomIcon name="ep:arrow-down" style={{ color: "#fff" }} />
      )}
      {label}
      {iconActive ? (
        <button style={{ display: "contents" }} onClick={onIconCLick}>
          <CustomIcon name="ep:arrow-down" style={{ color: iconColor }} />
        </button>
      ) : (
        <CustomIcon name="ep:arrow-down" style={{ color: iconColor }} />
      )}
    </button>
  );
};
