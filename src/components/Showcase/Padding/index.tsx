import React, { useContext } from "react";
import LabledComponent from "../../LabledComponent";
import { ValueContext } from "../../SliderWrapper";

interface BoxProps {
  value: number
}

const Box: React.FC<BoxProps> = ({ value }) => {
  return <div className="border border-indigo-600" style={{ padding: value }}>DAWG</div>
}

const Padding: React.FC = () => {
  const value = useContext(ValueContext);
  return (
    <LabledComponent
      displayName="div"
      child={<Box value={value} />}
    />
  );
};

export default Padding;
