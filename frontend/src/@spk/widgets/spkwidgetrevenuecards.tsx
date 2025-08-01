import  { Fragment } from 'react'
import SpkBadge from '../uielements/spk-badge';

interface revenuecards {   
    Color: string;     
    Title?: string ;              
    Icon?: string;           
    Value?: string;                      
    Percentage: string;           
}
const Spkwidgetrevenuecards:React.FC<revenuecards> = ({Color, Title, Icon, Value, Percentage}) => {
  return (
    <Fragment>
            <div className={`box custom-box !border-t-[0.188rem] border-solid ${Color.includes( "primary") || Color.includes("secondary")? "!": ""}border-t border-${Color} !rounded-none`}>
                <div className="box-body">
                    <div className="text-center">
                        <span className={`avatar avatar-md bg-${Color} shadow-sm !rounded-full mb-2`}>
                            <i className={`ri-${Icon} text-[1rem] text-white`}></i>
                        </span>
                        <p className="text-[.875rem] font-semibold mb-2">{Title}</p>
                        <div className="flex items-center justify-center flex-wrap">
                            <h5 className="mb-0 font-semibold">{Value}</h5>
                            <SpkBadge variant={`${Percentage.includes("+")? "success" : "danger"}/10`} customClass={`text-${Percentage.includes("+")? "success" : "danger"} rounded-full ms-1`}>{Percentage}</SpkBadge>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default Spkwidgetrevenuecards