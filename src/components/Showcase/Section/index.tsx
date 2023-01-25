import React from 'react'

interface Props {
    headerName: string,
    child: React.ReactNode
}

const Section: React.FC<Props> = ({ headerName, child }) => {
  return (
    <div className="p-4 pb-0">
        <p className='text-3xl p-2 border-b-2'>{headerName}</p>
        {child}
    </div>
  )
}

export default Section