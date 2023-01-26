import React, { useContext } from 'react'
import LabledComponent from '../../../LabledComponent';
import { ValueContext } from '../../../SliderWrapper';
import Box from '../../../Box';

const MarginXY = () => {
  const value = useContext(ValueContext);
  return (
    <div className='flex flex-row'>
      <LabledComponent
        displayName="div"
        child={<Box style={{ margin: value }} />}
      />
      <LabledComponent
        displayName="div"
        child={<Box style={{ margin: value }} />}
      />
    </div>
  )
}

export default MarginXY