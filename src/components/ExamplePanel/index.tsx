import React from 'react'

export interface ExamplePanelProps {
    exampleHeader: string,
    exampleDescription: string,
    exampleChild: React.ReactNode
}

const ExamplePanel: React.FC<ExamplePanelProps> = ({ exampleHeader, exampleDescription, exampleChild}) => {
    return (
        <div className='flex flex-col mt-4'>
          <p className='text-lg font-medium'>{exampleHeader}</p>
          <p className='text-sm text-gray-500'>{exampleDescription}</p>
					{exampleChild}
      </div>
    )
}

export default ExamplePanel