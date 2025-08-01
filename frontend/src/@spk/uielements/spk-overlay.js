import  { Fragment } from 'react'

const SpkOverlay = ({customClass, children, Popover}) => {
  return (
    <Fragment>
        <div className={`hs-tooltip ti-main-tooltip ${customClass} ${Popover}`} >
            {children}
        </div>
    </Fragment>
  )
}

export default SpkOverlay