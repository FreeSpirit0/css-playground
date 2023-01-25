import React, { useContext } from 'react'
import LabledComponent from '../../LabledComponent';
import { ValueContext } from '../../SliderWrapper';
import Box from '../Box';

const Margin = () => {
  const value = useContext(ValueContext);
  return (
    <>
      <LabledComponent
        displayName="div"
        child={<Box style={{ margin: value }} />}
      />
      <LabledComponent
        displayName="div"
        child={<Box style={{ margin: value }} />}
      />
    </>
  )
}

export default Margin