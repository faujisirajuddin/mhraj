import  { Fragment } from 'react'
import { Link } from 'react-router-dom'

interface SpkCoursecardsProps {   
    Percentagevalue: string;            
    Value?: string;     
    Color?: string ;   
    Title?: string ;   
    Icon?: string ;   
}

const SpkCoursecards:React.FC<SpkCoursecardsProps> = ({Percentagevalue, Value, Title, Color, Icon}) => {
  return (
    <Fragment>
         <div className="box">
            <div className="box-body">
                <div className="flex flex-wrap items-start gap-2">
                    <div className="me-1">
                        <span className={`avatar avatar-lg bg-${Color}`}>
                            <i className={`ti ti-${Icon} text-[1.25rem] text-white custom-lg-icon`}></i>
                        </span>
                    </div>
                    <div className="flex-grow">
                        <h5 className="block font-semibold text-[1.125rem]">{Value}</h5>
                        <div className="flex justify-between items-center">
                            <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">{Title}</div>
                            <div className={`text-${Percentagevalue.includes("+")? "success" : "danger"}`}><i className={`ti ti-trending-${Percentagevalue.includes("+")? "up" : "down"} text-[1rem] me-1 align-middle inline-flex`}></i>{Percentagevalue}</div>
                        </div>
                        <Link to="#" className={`text-${Color} text-[0.75rem]`}>View All<i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block text-[0.9rem] mb-1"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SpkCoursecards