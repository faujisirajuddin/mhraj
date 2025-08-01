import  { Fragment } from 'react'
import SpkBadge from '../uielements/spk-badge';

interface SpkProjectcardsProps {
    Titletext?: string;      
    Value?: string;       
    Percentagevalue?: string;       
    BadgeColor?: string;       
    Color?: string;     
    Icon?: string ;   
}

const SpkProjectcards: React.FC<SpkProjectcardsProps> = ({ Titletext, Value, Percentagevalue, BadgeColor, Color , Icon}:any) => {
  return (
    <Fragment>
            <div className="box">
                <div className="box-body flex justify-between items-center">
                    <div>
                        <p className="mb-1">{Titletext}</p>
                        <h4 className="font-semibold mb-1 text-[1.5rem]">{Value}</h4>
                        <SpkBadge variant={`${BadgeColor}/10`} customClass={`text-${BadgeColor}`}>{Percentagevalue}<i className={`ti ti-trending-${BadgeColor.includes("success")? "up" : "down" } ms-1`}></i></SpkBadge><span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] ms-1">this month</span>
                    </div>
                    <div>
                        <span className={`avatar avatar-md bg-${Color} text-white p-2`}>
                            <i className={`ti ti-${Icon} text-[1.25rem] text-white opacity-[0.7]`}></i>
                        </span>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default SpkProjectcards