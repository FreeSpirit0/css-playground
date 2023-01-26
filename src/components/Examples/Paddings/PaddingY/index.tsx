import React, { useContext } from "react";
import LabledComponent from "../../../LabledComponent";
import { ValueContext } from "../../../SliderWrapper";
import Box from "../../../Box";

const PaddingY: React.FC = () => {
  const value = useContext(ValueContext);
  return (
    <>
      <LabledComponent
        displayName="div"
        child={<Box style={{ paddingTop: value, paddingBottom: value }} />}
      />
    </>
  );
};

export default PaddingY;
