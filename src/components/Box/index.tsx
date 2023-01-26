import React from "react";

interface BoxProps {
  style: React.CSSProperties;
}

const Box: React.FC<BoxProps> = ({ style }) => {
  return (
    <div className="w-fit p-1 border border-indigo-600" style={style}>
      DAWG
    </div>
  );
};

export default Box;
