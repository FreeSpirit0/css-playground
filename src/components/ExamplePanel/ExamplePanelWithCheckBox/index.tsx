import React from 'react'
import ExamplePanel, { ExamplePanelProps } from '..'
import CheckboxWrapper from '../../Wrapper/CheckboxWrapper'

interface ExamplePanelWithCheckBox extends ExamplePanelProps {
    options: string[]
}

const ExamplePanelWithCheckBox: React.FC<ExamplePanelWithCheckBox> = ({ exampleHeader, exampleDescription, exampleChild, options }) => {
  return (
    <>
      <ExamplePanel exampleHeader={exampleHeader} exampleDescription={exampleDescription} exampleChild={
        <CheckboxWrapper child={exampleChild} options={options} />
      } />
    </>
  )
}

export default ExamplePanelWithCheckBox