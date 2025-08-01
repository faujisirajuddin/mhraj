import  { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SpkDropdown from '../uielements/spk-dropdown';

interface progresscards {   
    Color?: string;     
    Title?: string ;                   
    text?: string;            
    Icon?: string;           
    Value?: string;           
    Increment?: string;                  
    Percentage?: string;           
    Progresstext?: string;           
}
interface Maincard {   
    card: progresscards;              
}

const Spkwidgetprogresscards: React.FC<Maincard> = ({card}) => {
  return (
    <Fragment>
        <div className="box custom-box">
            <div className="box-body">
                <div className="flex items-start justify-between mb-6">
                    <div className="flex-grow flex items-start">
                        <div className="me-2">
                            <span className={`avatar avatar-md ${card.Color} bg-light`}><i className={`ti ti-${card.Icon} text-[1.125rem]`}></i></span>
                        </div>
                        <div className="flex-grow">
                            <p className="font-semibold text-[.875rem] mb-0">{card.Title}</p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem] opacity-[0.7]">{card.text}</p>
                        </div>
                    </div>
                    <SpkDropdown Linkclass="ti-btn ti-btn-icon ti-btn-sm ti-btn-light" Icon={true} IconClass="ti ti-dots" Linktag={true}>
                        <li><Link to="#" className="ti-dropdown-item">Action</Link></li>
                        <li><Link to="#" className="ti-dropdown-item">Another Action</Link></li>
                        <li><Link to="#" className="ti-dropdown-item">Something Else Here</Link></li>
                    </SpkDropdown>
                </div>
                <div className="flex items-center mb-0">
                    <p className="mb-0 text-[1.25rem] font-semibold">{card.Value}</p>
                    <span className="text-[#8c9097] dark:text-white/50 ms-2"><i className={`ti ti-trending-up align-middle text-success me-1 inline-block`}></i>{card.Increment}</span>
                </div>
                <div className="flex items-center">
                    <div className="flex-grow">
                        <div className="progress progress-xs">
                            <div className={`progress-bar !bg-${card.Color} ${card.Percentage}`} role="progressbar" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                    <div className="ms-3">
                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">{card.Progresstext}% Target</span>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Spkwidgetprogresscards