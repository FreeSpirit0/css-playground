import React, { createContext, useState } from 'react'

interface Props {
	child: React.ReactNode
}

export const ValueContext = createContext(0);

const SliderWrapper: React.FC<Props> = ({ child }) => {
  const MAX = 50
  const MIN = 0

  const [value, setValue] = useState(0)
	
  return (
    <ValueContext.Provider value={value}>
      <div className="pt-4">
        <input className="w-40" type="range" min={MIN} max={MAX} onChange={(e) => setValue(parseInt(e.target.value))} value={value}/>
        {child}
      </div>
		</ValueContext.Provider>
  )
}

export default SliderWrapper