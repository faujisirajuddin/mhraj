import  { Fragment, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface SpksalescardsProps {

    SvgIcon?: ReactNode;      
    Value?: string;       
    Percentagevalue?: string;            
    Color?: string;     
    Titletext?: string ;   
}


const Spksalescards :React.FC<SpksalescardsProps>= ({SvgIcon, Titletext, Value, Color, Percentagevalue}:any) => {
  return (
    <Fragment>
        <div className="box">
              <div className="box-body">
                  <div className="grid grid-cols-12">
                      <div className="col-span-6 pe-0">
                          <p className="mb-2">
                              <span className="text-[1rem]">{Titletext}</span>
                          </p>
                          <p className="mb-2 text-[0.75rem]">
                              <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">{Value}</span>
                              <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">THIS MONTH</span>
                          </p>
                          <Link to="#"  className="text-[0.75rem] mb-0 text-primary">Show full stats<i className="ti ti-chevron-right ms-1 inline-flex"></i></Link>
                      </div>
                      <div className="col-span-6">
                          <p className={`badge bg-${Color}/10 !text-${Color} ltr:float-right rtl:float-left inline-flex`}><i className={`ti ti-caret-${Color.includes("success")? "up": "down"} me-1`}></i>{Percentagevalue}</p>
                          <p className="main-card-icon mb-0">{SvgIcon}</p>
                      </div>
                  </div>
              </div>
          </div>
    </Fragment>
  )
}

export default Spksalescards