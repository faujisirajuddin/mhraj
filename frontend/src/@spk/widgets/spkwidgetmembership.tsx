import  { Fragment } from 'react'
import { Link } from 'react-router-dom'

interface widgetmembership {   
    Icon?: string;     
    Title?: string ;                   
    Value?: string;            
    Color?: string;           
}

const Spkwidgetmembership :React.FC<widgetmembership>= ({Title, Value, Icon, Color}) => {
  return (
    <Fragment>
            <div className="box custom-box">
                <div className="box-body">
                    <div className="flex items-center">
                        <div className="flex-grow">
                            <p className="mb-1 text-[1.25rem] font-semibold text-default">{Value}</p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">{Title}</p>
                            <p className="mb-0 text-[.6875rem]"><Link to="#" className="text-success underline">View All</Link></p>
                        </div>
                        <div className="ms-2">
                            <span className={`avatar !bg-${Color} !text-white !rounded-full text-[1.25rem]`}><i className={`bi bi-${Icon} text-white`}></i></span>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default Spkwidgetmembership