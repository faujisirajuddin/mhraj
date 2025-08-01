import  { Fragment } from 'react'

interface Spkwidgettrading {   
    Icon?: string;     
    Titletext?: string ;
    Value?: string;       
    Percentagevalue?: string;       
    Color?: string;           
}
const Spkwidgettradingcards:React.FC<Spkwidgettrading> = ({Titletext, Value, Percentagevalue, Color, Icon}) => {
  return (
    <Fragment>
        <div className="box custom-box">
                <div className="box-body">
                    <div className="flex flex-wrap items-start justify-between ">
                        <div className="flex-grow">
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">{Titletext}</p>
                            <div className="flex items-center">
                                <span className="text-[1.25rem] font-semibold">{Value}</span>
                                <span className="text-[0.75rem] text-success ms-2"><i className="ti ti-trending-up me-1 inline-block"></i>{Percentagevalue}</span>
                            </div>
                        </div>
                        <div>
                            <span className={`avatar avatar-md !rounded-full bg-${Color}/10 !text-${Color} text-[1.125rem]`}>
                                <i className={`bi bi-${Icon} text-[1rem]`}></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default Spkwidgettradingcards