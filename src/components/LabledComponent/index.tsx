import React from 'react'

interface LabledComponentProps {
    displayName: string,
    child: React.ReactNode
}

const LabledComponent: React.FC<LabledComponentProps> = ({ displayName, child }) => {
  return (
    <div className='flex flex-col items-start'>
        <p className='text-l'>{displayName}</p>
        {child}
    </div>
  )
}

export default LabledComponent