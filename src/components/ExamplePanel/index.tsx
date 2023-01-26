import React from 'react'
import SliderWrapper from '../SliderWrapper'

interface Props {
    exampleHeader: string,
    exampleDescription: string,
    exampleChild: React.ReactNode
}

const ExamplePanel: React.FC<Props> = ({ exampleHeader, exampleDescription, exampleChild}) => {
  return (
      <div className='flex flex-col mt-4'>
        <p className='text-lg font-medium'>{exampleHeader}</p>
        <p className='text-sm text-gray-500'>{exampleDescription}</p>
        <SliderWrapper child={exampleChild} / >
    </div>
  )
}

export default ExamplePanel