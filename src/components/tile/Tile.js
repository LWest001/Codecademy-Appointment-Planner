import React from "react";

export const Tile = ({ object }) => {
  const objectValues = Object.values(object);
  const tileParagraphs = objectValues.map((value, index) => {
    return (
      <p key={index} className={index === 0 ? "tile-title" : "tile"}>
        {value}
      </p>
    );
  });

  return <div className="tile-container">{tileParagraphs}</div>;
};
