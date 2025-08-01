import React, { Fragment, ReactNode } from 'react'

interface SpkNFTCardsProps {
  Svg?: ReactNode;        
  Titletext?: string;         
  Percentagevalue: string;     
  Value?: string;    
  Color?: string;   
}
const SpkNFTCards : React.FC<SpkNFTCardsProps>= ({Svg, Titletext, Color, Value, Percentagevalue}) => {
  return (
    <Fragment>
          <div className="box">
                  <div className="box-body">
                      <div className="flex flex-wrap items-start">
                          <div className="me-4 leading-none">
                              <span className={`avatar avatar-lg bg-${Color}`}>
                                 {Svg}
                              </span>
                          </div>
                          <div>
                              <p className="text-[#8c9097] dark:text-white/50">{Titletext}</p>
                              <h5 className="mb-1 font-semibold text-[1.25rem]">{Value}</h5>
                              <p className="text-[0.6875rem] text-[#8c9097] dark:text-white/50 mb-0">
                              <span
                                  className={`text-${Percentagevalue.includes("0.124")? "danger":"success"} font-semibold`}>{Percentagevalue}<i
                                      className="ri-arrow-up-s-line align-middle ms-1 me-2"></i></span>
                                  This month
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
    </Fragment>
  )
}

export default SpkNFTCards