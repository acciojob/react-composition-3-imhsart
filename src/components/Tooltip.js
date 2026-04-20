import React, {useState} from 'react'


const Tooltip = ({text, children}) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div  className="tooltip" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      {children}
      {
        showTooltip && <div className='tooltiptext'>{text}</div>
      }
    </div>
  )
}

export default Tooltip