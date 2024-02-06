import { CustomIcon } from "../../../../components/Common/CustomIcon/CustomIcon";

const totalIcons = 5;
const activeIcons = 1;

export const IndicatorList = () => {
  return (
    <>
      {Array.from({ length: totalIcons }, (_, index) => (
        <CustomIcon
          key={index}
          name="tabler:point-filled"
          style={{ color: index < activeIcons ? "#E73C17" : "#D7D7D7" }}
        />
      ))}
    </>
  );
};
