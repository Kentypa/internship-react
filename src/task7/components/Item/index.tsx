import React from "react";

type ItemProps = {
  index: number;
  style: React.CSSProperties;
};

export const Item: React.FC<ItemProps> = ({ index, style }) => {
  return <div style={style}>Item: {index}</div>;
};
