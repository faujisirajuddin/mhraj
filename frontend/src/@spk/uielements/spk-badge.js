import  { Fragment } from 'react'

const SpkBadge = ({variant, children, customClass, Id}) => {
  return (
    <Fragment>
         <span className={`badge bg-${variant} ${customClass}`} id={Id} >{children}</span>
    </Fragment>
  )
}

export default SpkBadge