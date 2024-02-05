import { CustomIcon } from "../../../../components/Common/CustomIcon/CustomIcon";

export const ProductRating = ({
  rating,
  outOf = 5,
  fullColor = "#E73C17",
  emptyColor = "#F1F1F1",
}) => {
  // Crear un array de 5 elementos y mapear sobre él para renderizar las estrellas
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
