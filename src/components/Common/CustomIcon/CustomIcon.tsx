import { Icon } from "@iconify/react";
import React from "react";

type Props = {
  name: string;
  style?: React.CSSProperties;
};

export const CustomIcon: React.FC<Props> = ({ name, style }) => {
  return <Icon icon={name} style={style} />;
};
