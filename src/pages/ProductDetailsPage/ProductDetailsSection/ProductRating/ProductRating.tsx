import { CustomIcon } from "../../../../components/Common/CustomIcon/CustomIcon";

type Props = {
  rating: number;
  outOf?: number;
  fullColor?: string;
  emptyColor?: string;
};

export const ProductRating: React.FC<Props> = ({
  rating,
  outOf = 5,
  fullColor = "#E73C17",
  emptyColor = "#F1F1F1",
}) => {
  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: outOf }, (_, index) => (
        <CustomIcon
          key={index}
          name="material-symbols-light:star"
          style={{
            color: index < rating ? fullColor : emptyColor,
            width: "12px",
            height: "12px",
          }}
        />
      ))}
    </div>
  );
};
