import  { Fragment } from 'react'

interface widgetrecrutiers {   
    Icon?: string;     
    Title?: string ;                   
    Avatarclass?: string;           
    CustomClass: string;           
    Titleclass?: string;           
}
const Spkwidgetrecrutiers :React.FC<widgetrecrutiers>= ({Title,   Icon,  Avatarclass, CustomClass, Titleclass}) => {
  return (
    <Fragment>
        <div className={`box custom-box ${CustomClass}`}>
                <div className="box-body">
                    <div className="flex flex-wrap items-start mb-2">
                        <div className="flex-grow">
                            <p className={`mb-0 ${Titleclass}`}>{Title}</p>
                        </div>
                        <div className="ms-2">
                            <span className={`avatar avatar-md ${Avatarclass} `}>
                                <i className={`bi bi-${Icon}`}></i>
                            </span>
                        </div>
                    </div>
                    <span className={`text-[1.25rem] font-semibold ${CustomClass.includes("box-bg-primary")? "!text-white": "" } `}>9,231</span>
                    <span className={`text-[0.75rem]  ms-1 ${CustomClass.includes("box-bg-primary")? "opacity-[0.7] ms-1 !text-white": "text-success" }`}><i className="ti ti-trending-up me-1 inline-block"></i>0.5%</span>
                </div>
            </div>
    </Fragment>
  )
}

export default Spkwidgetrecrutiers