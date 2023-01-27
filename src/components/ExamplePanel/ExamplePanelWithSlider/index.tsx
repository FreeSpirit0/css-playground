import React from "react";
import ExamplePanel, { ExamplePanelProps } from "..";
import SliderWrapper from "../../Wrapper/SliderWrapper";

const ExamplePanelWithSlider: React.FC<ExamplePanelProps> = ({ exampleHeader, exampleDescription, exampleChild }) => {
  return (
    <>
      <ExamplePanel exampleHeader={exampleHeader} exampleDescription={exampleDescription} exampleChild={
        <SliderWrapper child={exampleChild} />
      } />
    </>
  );
};

export default ExamplePanelWithSlider;
