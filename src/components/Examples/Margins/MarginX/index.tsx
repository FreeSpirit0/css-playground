import React, { useContext } from 'react'
import LabledComponent from '../../../LabledComponent';
import { ValueContext } from '../../../SliderWrapper';
import Box from '../../../Box';

const MarginX = () => {
  const value = useContext(ValueContext);
  return (
    <div className='flex flex-row'>
      <LabledComponent
        displayName="div"
        child={<Box style={{ marginLeft: value, marginRight: value }} />}
      />
      <LabledComponent
        displayName="div"
        child={<Box style={{ marginLeft: value, marginRight: value }} />}
      />
    </div>
  )
}

export default MarginX