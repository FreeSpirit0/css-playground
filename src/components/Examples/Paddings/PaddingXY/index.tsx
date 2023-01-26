import React, { useContext } from "react";
import LabledComponent from "../../../LabledComponent";
import { ValueContext } from "../../../SliderWrapper";
import Box from "../../../Box";

const PaddingXY: React.FC = () => {
  const value = useContext(ValueContext);
  return (
    <>
      <LabledComponent
        displayName="div"
        child={<Box style={{ padding: value }} />}
      />
    </>
  );
};

export default PaddingXY;
