import { FixedSizeList as List } from "react-window";
import React from "react";
import { Item } from "../Item";

const ItemsList: React.FC = () => {
  return (
    <List height={150} itemCount={1000} itemSize={35} width={300}>
      {Item}
    </List>
  );
};

export default ItemsList;
