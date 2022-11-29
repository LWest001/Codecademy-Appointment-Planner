import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ objectArr }) => {
  let tiles = [];
  for (let object in objectArr) {
    tiles.push(<Tile object={objectArr[object]} key={object} />);
  }

  return <div>{tiles}</div>;
};
